import { ReactNode } from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.span`
  position: relative;

  --border-color: #bdbdbd;

  &:after {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;

    background-color: var(--border-color);
  }

  &:focus, &:focus-within, &:hover {
    --border-color: #212121;
  }
`

const StyledSelect = styled.select`
  appearance: none;

  border: none;
  background-color: #fff;
`

interface Props {
  children: ReactNode
}

function Select({ children }: Props) {
  return (
    <Wrapper>
      <StyledSelect>{children}</StyledSelect>
    </Wrapper>
  )
}

export default Select
