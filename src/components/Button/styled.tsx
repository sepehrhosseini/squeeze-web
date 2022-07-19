import styled from '@emotion/styled'

export const Icon = styled.span`
  margin-right: 24px;

  &,
  & svg {
    width: 22px;
    height: 22px;
  }
`

export const Button = styled.button`
  appearance: none;
  border: none;
  background-color: #fff;

  border-radius: 6px;
  min-width: 160px;
  height: 50px;

  font-size: 20px;
  font-family: inherit;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`
