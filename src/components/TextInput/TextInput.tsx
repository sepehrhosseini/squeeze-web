import { FormEventHandler, ReactNode } from 'react'
import styled from '@emotion/styled'

interface WrapperProps {
  width?: string
  children: ReactNode
}
const Wrapper = styled.div<WrapperProps>`
  position: relative;

  width: ${({ width }) => width || 'auto'};

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

interface Sizes {
  [id: string]: number
}

const sizes: Sizes = {
  small: 12,
  medium: 16,
  large: 30,
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  fontSize?: number
  size: any
}
const StyledInput = styled('input')<InputProps>`
  appearance: none;
  border: none;

  width: 100%;

  padding: ${({size}: InputProps) => sizes[size] / 2};
  font-size: ${({ fontSize, size }: InputProps) => fontSize || sizes[size]}px;

  &:placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: none;
  }
`

interface Props {
  size?: any
  value?: any

  width?: string
  className?: string
  placeholder?: string

  fontSize?: number

  onChange?: FormEventHandler<HTMLInputElement>
}

function TextInput({
  size = 'medium',
  width,
  className,
  fontSize,
  placeholder,
  value,
  onChange = e => {},
}: Props): JSX.Element {
  return (
    <Wrapper width={width}>
      <StyledInput
        size={size}
        value={value}
        className={className}
        fontSize={fontSize}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default TextInput
