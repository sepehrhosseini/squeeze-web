import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react'

interface Props {
  component: () => JSX.Element
}

function ProtectedRoute({ component, ...args }: Props): JSX.Element {
  const Component = withAuthenticationRequired(component, args)
  return <Component />
}

export default ProtectedRoute
