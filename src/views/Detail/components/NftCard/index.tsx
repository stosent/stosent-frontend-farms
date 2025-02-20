import React, { useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import {
  Card,
  CardBody,
  Heading,
  Tag,
  Button,
  ChevronUpIcon,
  ChevronDownIcon,
  Text,
  CardFooter,
  useModal,
  LogoIcon,
} from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { List } from 'antd'
import useI18n from 'hooks/useI18n'
import { Nft } from 'config/constants/types'
import { AMOUNT_TO_CLAIM } from 'config/constants/nfts'
import Page from 'components/layout/Page'
import InfoRow from '../InfoRow'
import Image from '../Image'
import { NftProviderContext } from '../../contexts/NftProvider'
import { getNftContract } from '../../utils/contracts'
import ClaimNftModal from '../ClaimNftModal'
import BurnNftModal from '../BurnNftModal'
import TransferNftModal from '../TransferNftModal'

interface NftCardProps {
  nft: Nft
}

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const Header = styled(InfoRow)`
  min-height: 28px;
`

const DetailsButton = styled(Button).attrs({ variant: 'text', fullWidth: true })`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`

const InfoBlock = styled.div`
  padding: 0 24px 24px;
`

const Value = styled(Text)`
  font-weight: 600;
`

const SmallCard = styled(Card)`
  width: 500px;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 320px;
  }
`

const CustomButton = styled(Button)`
  margin-left: 10px;
`

const NftCard: React.FC<NftCardProps> = ({ nft }) => {
  const [state, setState] = useState({
    isLoading: false,
    isOpen: true,
    nftCount: 0,
    nftBurnCount: 0,
  })
  const TranslateString = useI18n()
  const {
    isInitialized,
    hasClaimed,
    ownerById,
    canBurnNft,
    totalSupplyDistributed,
    currentDistributedSupply,
    getTokenIds,
    reInitialize,
    allowMultipleClaims,
    priceMultiplier,
    maxMintPerNft,
    amounts,
    maxMintByNft,
    prices,
    myMints,
  } = useContext(NftProviderContext)
  const { account } = useWallet()

  // console.log('CONTRACT/GALLERY INFO:', totalSupplyDistributed, priceMultiplier, maxMintPerNft)
  // console.log('LIMITS BY NFT:', amounts, maxMintByNft, prices)

  // maxMintPerNft limit max amount that a nft can be minted
  // maxMintByNft array containing individual amount of mint per nft index
  // prices array containing individual prices of a mint per nft index
  // tokenPerBurn global price

  // console.log(ownerById)

  const {
    nftId,
    name,
    previewImage,
    originalImage,
    fileType,
    description,
    metadata,
    tokenAmount,
    tokenSupply,
    active,
  } = nft

  const nftIndex = hasClaimed && hasClaimed.indexOf(nftId)

  const MINTS = myMints[nftIndex] || 0

  const MINTED = amounts[nftIndex] ? parseInt(amounts[nftIndex].toString()) : 0
  const MAX_MINT = maxMintByNft[nftIndex] ? parseInt(maxMintByNft[nftIndex].toString()) : maxMintPerNft

  const hasClaimedArr: any = hasClaimed[0]
  const ownerByIdArr: any = ownerById[0]

  const firstCharOfAccount = account != null && account.slice(0, 4)
  const lastCharOfAccount = account != null && account.slice(-4)

  const accountName = account != null && `${firstCharOfAccount}...${lastCharOfAccount}`

  const loggedIn = account !== null

  // console.log('?hasClaimed', hasClaimed)
  // console.log('?ownerById', ownerById)

  const walletCanClaim = maxMintPerNft === 0 || MINTED === undefined || MINTED < MAX_MINT

  const tokenIds = getTokenIds(nftId)
  const isSupplyAvailable = currentDistributedSupply < totalSupplyDistributed
  const walletOwnsNft = tokenIds && tokenIds.length > 0
  const Icon = state.isOpen ? ChevronUpIcon : ChevronDownIcon

  const fetchDetails = useCallback(async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }))
    try {
      const { methods } = getNftContract()
      const nftCount = await methods.nftCount(nftId).call()
      const nftBurnCount = await methods.nftBurnCount(nftId).call()

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        isDataFetched: true,
        nftCount: parseInt(nftCount, 10),
        nftBurnCount: parseInt(nftBurnCount, 10),
      }))
    } catch (error) {
      console.error(error)
    }
  }, [nftId])

  const handleClick = async () => {
    if (state.isOpen) {
      setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }))
    } else {
      try {
        await fetchDetails()
      } catch (error) {
        console.error(error)
      } finally {
        setState((prevState) => ({ ...prevState, isOpen: !prevState.isOpen }))
      }
    }
  }

  const handleSuccess = () => {
    fetchDetails()
    reInitialize()
  }

  const [onPresentClaimModal] = useModal(<ClaimNftModal nft={nft} onSuccess={handleSuccess} />)
  const [onPresentBurnModal] = useModal(<BurnNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />)
  const [onPresentTransferModal] = useModal(
    <TransferNftModal nft={nft} tokenIds={tokenIds} onSuccess={handleSuccess} />,
  )

  return (
    <SmallCard isActive={walletOwnsNft}>
      {fileType === 'mp4' && (
        <video height="500px" width="100%" loop autoPlay muted>
          <source src={originalImage} type="video/mp4" />
          <track kind="captions" />
        </video>
      )}
      {fileType !== 'mp4' && (
        <Image src={originalImage} alt={name} originalLink={walletOwnsNft ? originalImage : null} />
      )}
      <CardBody>
        <Header>
          <Heading>{name}</Heading>
          {isInitialized && walletCanClaim && active && (
            <Tag outline variant="success">
              {TranslateString(526, 'Available')}
            </Tag>
          )}
          {isInitialized && walletCanClaim && !active && (
            <Tag outline variant="failure">
              Coming Soon
            </Tag>
          )}
          {isInitialized && !walletCanClaim && (
            <Tag outline variant="failure">
              Sold Out
            </Tag>
          )}
          {isInitialized && tokenIds && (
            <Tag outline variant="secondary">
              {TranslateString(999, 'In Wallet')}
            </Tag>
          )}
        </Header>
        {isInitialized && loggedIn && walletCanClaim && isSupplyAvailable && active && (
          <Button onClick={onPresentClaimModal} mt="24px">
            {TranslateString(999, 'Claim this NFT')} for {tokenAmount} STOS
          </Button>
        )}
        {isInitialized && loggedIn && walletCanClaim && isSupplyAvailable && (
          <CustomButton
            onClick={() =>
              window.open(
                'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9eab0a93b0cd5d904493694f041bdcedb97b88c6',
                '_blank',
              )
            }
            mt="24px"
          >
            {TranslateString(999, 'Buy STOS')}
          </CustomButton>
        )}
        {isInitialized && walletOwnsNft && (
          <Button fullWidth variant="secondary" mt="24px" onClick={onPresentTransferModal}>
            {TranslateString(999, 'Transfer')}
          </Button>
        )}
      </CardBody>
      <CardFooter p="2">
        {state.isOpen && (
          <InfoBlock>
            <List
              size="small"
              dataSource={description.split('.')}
              renderItem={(item) => (
                <Text as="p" color="textSubtle" mb="16px" style={{ textAlign: 'left' }}>
                  {item}
                </Text>
              )}
            />
            {active && (
              <InfoRow>
                <Text>{TranslateString(999, 'Number minted')}:</Text>
                <Value>
                  {MINTED}/{tokenSupply}
                </Value>
              </InfoRow>
            )}
            {active && (
              <InfoRow>
                <Text>{TranslateString(999, 'Minted By Me')}:</Text>
                <Value>{MINTS}</Value>
              </InfoRow>
            )}
          </InfoBlock>
        )}
      </CardFooter>
    </SmallCard>
  )
}

export default NftCard
