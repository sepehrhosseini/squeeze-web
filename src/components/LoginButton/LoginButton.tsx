import { useAuth0 } from '@auth0/auth0-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import Avatar from 'components/Avatar'

import * as S from './styled'

function LoginButton(): JSX.Element {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()

  function onLogin() {
    loginWithRedirect()
  }

  return !user ? (
    <S.LoginButton
      onClick={onLogin}
      icon={<FontAwesomeIcon icon={solid('arrow-right-to-bracket')} />}
    >
      Join
    </S.LoginButton>
  ) : (
    <>
      <Avatar src={user.picture as string} />
      {user.name}
    </>
  )
}

export default LoginButton
