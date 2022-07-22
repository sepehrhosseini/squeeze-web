import { useState, useEffect, useCallback } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import Container from 'components/Container'
import Header from 'components/Header'
import TextInput from 'components/TextInput'
import Select from 'components/Select'
import Button from 'components/Button'

import api from 'api'

import * as S from './styled'

interface Question {
  title: string
  answers: Answer[]
}

interface Answer {
  label: string
  isCorrect: boolean
}

function CreateQuiz() {
  const { getAccessTokenSilently } = useAuth0()
  const [title, setTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState<Question[]>([
    { title: '', answers: [] },
  ])

  const addQuestion = () => {
    setQuestions([...questions, { title: '', answers: [] }])
  }

  const addAnswer = (targetIndex: number) => {
    const updatedQuestions = questions.map(
      (question: Question, index: number) => {
        if (index === targetIndex)
          question.answers.push({ label: '', isCorrect: false })

        return question
      }
    )
    setQuestions(updatedQuestions)
  }

  const toggleIsCorrect = (questionIndex: number, answerIndex: number) => {
    const updatedQuestions = questions.map((question, index) => {
      if (index === questionIndex) {
        question.answers.map((answer, index) => {
          if (index === answerIndex) answer.isCorrect = !answer.isCorrect
          return answer
        })
      }

      return question
    })

    setQuestions(updatedQuestions)
  }

  const createQuiz = async () => {
    try {
      setIsLoading(true)
      const accessToken = await getAccessTokenSilently()
      const { data } = await api.post(
        '/quizzes',
        { title, questions },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
    } catch (err) {
      console.log("err: ", err);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Header />

      <S.Main>
        <S.Heading>Enter the title of quiz, questions and answers.</S.Heading>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          size="large"
          placeholder="Quiz Title"
        />

        {questions.map((question, index) => (
          <>
            <S.Card>
              <div>Question {index + 1}</div>
              <TextInput size="large" placeholder="Question Title" />
              <Select>
                <option>Single</option>
                <option>Multiple</option>
              </Select>
              <div>
                {question.answers.map((answer, answerIndex) => (
                  <S.AnswerRow>
                    <S.AnswerLabel>
                      <TextInput placeholder="Answer label" />
                    </S.AnswerLabel>
                    <S.AnswerActions>
                      <div onClick={() => toggleIsCorrect(index, answerIndex)}>
                        {answer.isCorrect
                          ? 'Correct answer'
                          : 'Mark as correct'}
                      </div>
                    </S.AnswerActions>
                  </S.AnswerRow>
                ))}
                <S.AnswerRow onClick={() => addAnswer(index)}>
                  Add Answer
                </S.AnswerRow>
              </div>
            </S.Card>
          </>
        ))}
        <S.Card onClick={() => addQuestion()}>Add Questions</S.Card>
        <Button onClick={() => createQuiz()} disabled={isLoading}>Create Quiz</Button>
      </S.Main>
    </Container>
  )
}

export default CreateQuiz
