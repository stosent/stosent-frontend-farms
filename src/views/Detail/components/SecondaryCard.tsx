import styled from 'styled-components'

const SecondaryCard = styled.div`
  align-items: start;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.textDisabled};
  border-radius: 32px;
  display: flex;
  padding: 24px;
  backdrop-filter: blur(3px);
  background: rgba(39, 38, 44, 0.8);
`

export default SecondaryCard
