import React from 'react'
import { Card, CardBody, Heading, Text, Button } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import CardContent from './CardContent'

const YouWonCard = () => {
  const TranslateString = useI18n()

  return (
    <Card isActive style={{ backdropFilter: 'blur(3px)', background: 'rgba(39, 38, 44, 0.8)' }}>
      <CardBody>
        <CardContent imgSrc="/images/present.svg">
          <Heading mb="8px">{TranslateString(999, 'NFTs Available!')}</Heading>
          <Text>{TranslateString(999, 'Claim an NFT from the options below!')}</Text>
          <Button
            onClick={() =>
              window.open(
                'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x9eab0a93b0cd5d904493694f041bdcedb97b88c6',
                '_blank',
              )
            }
            mt="24px"
          >
            {TranslateString(999, 'Buy STOS')}
          </Button>
        </CardContent>
      </CardBody>
    </Card>
  )
}

export default YouWonCard
