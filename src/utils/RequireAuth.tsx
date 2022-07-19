import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, useLocation } from 'react-router-dom'

interface Props {
  children: JSX.Element
}

function RequireAuth({ children }: Props): JSX.Element {
  const { isAuthenticated } = useAuth0()
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
