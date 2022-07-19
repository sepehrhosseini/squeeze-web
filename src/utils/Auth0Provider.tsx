import { ReactNode } from 'react'
import {
  Auth0Provider,
  Auth0ProviderOptions,
  AppState,
} from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

function Auth0ProviderWithRedirectCallback({
  children,
  ...props
}: Props): JSX.Element {
  const navigate = useNavigate()
  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate((appState && appState.returnTo) || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      scope={''}
      audience='localhost'
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithRedirectCallback
