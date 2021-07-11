import React from 'react'
import styled from 'styled-components'
import { Card, CardBody } from '@pancakeswap-libs/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalClaim } from 'hooks/useTickets'
import PrizesWonContent from './PrizesWonContent'
import NoPrizesContent from './NoPrizesContent'

const StyledCard = styled(Card)`
  ${(props) =>
    props.isDisabled
      ? `  
        margin-top: 16px;
        border: 1px solid ${props.theme.colors.textDisabled};

        ${props.theme.mediaQueries.sm} {
          margin-top: 24px;
        }

        ${props.theme.mediaQueries.lg} {
          margin-top: 32px;
        }
        `
      : ``}
`

const YourPrizesCard: React.FC = () => {
  const { claimAmount } = useTotalClaim()

  const winnings = getBalanceNumber(claimAmount)
  const isAWin = winnings > 0

  return (
    <StyledCard isDisabled={!isAWin} isActive={isAWin} style={{ backdropFilter: 'blur(3px)', background: 'rgba(39, 38, 44, 0.8)' }}>
      <CardBody>{isAWin ? <PrizesWonContent /> : <NoPrizesContent />}</CardBody>
    </StyledCard>
  )
}

export default YourPrizesCard
