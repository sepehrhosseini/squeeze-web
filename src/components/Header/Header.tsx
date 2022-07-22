import styled from '@emotion/styled'

import Logo from 'components/Logo'

const Styled = styled.header`
  text-align: center;

  margin: 36px 0;
`

function Header() {
  return (
    <Styled>
      <Logo />
    </Styled>
  )
}

export default Header
