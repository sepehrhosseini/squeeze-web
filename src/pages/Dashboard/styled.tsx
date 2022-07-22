import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`

export const Main = styled.div``

export const ButtonBox = styled(Link)`
  display: block;
  width: 100%;

  border: 1px dashed #bdbdbd;

  color: #000;
  text-decoration: none;

  padding: 12px;
  border-radius: 8px;

  font-size: 20px;
  font-family: ${({ theme }) => theme.typography.fontFamily};

  text-align: center;

  &:hover, &:focus {
    background-color: #fafafa;
  }
`
