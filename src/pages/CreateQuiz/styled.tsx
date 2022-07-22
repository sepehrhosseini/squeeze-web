import styled from '@emotion/styled'

export const Main = styled.div``

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 700;
`

export const Card = styled.div`
  padding: 16px;
  margin-top: 32px;
  
  border-radius: 10px;

  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
`

export const AnswerRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  cursor: pointer;

  padding: 16px;

  position: relative;

  &:before {
    content: '';

    flex: 0 0 30px;
    height: 30px;
    width: 30px;

    margin-right: 16px;

    border-radius: 15px;

    border: 2px solid #000;
  }
`

export const AnswerLabel = styled.div`
  flex: 1 1 100%;
`

export const AnswerActions = styled.div`
  flex: 0 0 auto;
`
