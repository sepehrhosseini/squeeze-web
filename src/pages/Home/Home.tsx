import { useAuth0 } from '@auth0/auth0-react'
import { Navigate } from 'react-router-dom'

import Logo from 'components/Logo'
import LoginButton from 'components/LoginButton'

import CircularProgress from '@mui/material/CircularProgress'

import * as S from './styled'

function Home() {
  const { user, isLoading, isAuthenticated } = useAuth0()

  console.log('user: ', user)
  console.log('isLoading ', isLoading)
  console.log('isAuthenticated: ', isAuthenticated)

  if (isAuthenticated) return <Navigate to="/dashboard" replace />

  if (isLoading) return <CircularProgress color="primary" />

  return (
    <S.Wrapper>
      <S.Inner>
        <Logo />
        <div>
          <S.Subtitle>Create and share Quizzes easily</S.Subtitle>
        </div>
        <S.Actions>
          <LoginButton />
        </S.Actions>
      </S.Inner>
    </S.Wrapper>
  )
}

export default Home
