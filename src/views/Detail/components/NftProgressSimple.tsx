import React, { useContext } from 'react'
import { Card, CardBody, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { NftProviderContext } from '../contexts/NftProvider'
import InfoRow from './InfoRow'

const NftProgressSimple = () => {
  const TranslateString = useI18n()
  const { isInitialized, currentDistributedSupply, totalSupplyDistributed, countBurnt } = useContext(NftProviderContext)

  return (
    <Card style={{ backdropFilter: 'blur(3px)', background: 'rgba(39, 38, 44, 0.8)' }}>
      <CardBody>
        <InfoRow>
          <Text>{TranslateString(999, "Total NFT's claimed")}:</Text>
          <Text>
            <strong>{!isInitialized ? '...' : `${currentDistributedSupply}/${totalSupplyDistributed}`}</strong>
          </Text>
        </InfoRow>
        <InfoRow>
          <Text>{TranslateString(999, "Total NFT's burned")}:</Text>
          <Text>
            <strong>{!isInitialized ? '...' : `${countBurnt}/${totalSupplyDistributed}`}</strong>
          </Text>
        </InfoRow>
      </CardBody>
    </Card>
  )
}

export default NftProgressSimple
