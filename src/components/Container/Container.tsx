import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface Props {
  children: ReactNode
}

const Styled = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

function Container({ children }: Props): JSX.Element {
  return <Styled>{children}</Styled>
}

export default Container
