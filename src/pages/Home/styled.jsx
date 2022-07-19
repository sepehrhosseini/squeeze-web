import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  font-family: ${({ theme }) => theme.typography.fontFamily};

  * {
    font-family: inherit;
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column wrap;

  max-width: 300px;
`

export const Subtitle = styled.p`
  font-size: 36px;
  text-align: center;
`

export const Actions = styled.div`
  margin-top: 64px;
`
