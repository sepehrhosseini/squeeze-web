import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Container from 'components/Container'
import Header from 'components/Header'
import Button from 'components/Button'

import useApi from 'hooks/useApi'

import * as S from './styled'

function Dashboard(): JSX.Element {
  const { logout } = useAuth0()
  const { refresh, data: quizzes } = useApi('http://localhost:3000/quizzes')

  return (
    <Container>
      <Header />
      <S.Main>
        <S.ButtonBox to="/quiz/new">
          <div>Add Quiz</div>
          <div></div>
        </S.ButtonBox>
      </S.Main>
      {/* <Button onClick={() => logout({ returnTo: window.location.origin })}> */}
      {/*   Logout */}
      {/* </Button> */}
    </Container>
  )
}

export default Dashboard
