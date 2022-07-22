import styled from '@emotion/styled'

interface WrapperProps {
  opacity?: number
}
const Wrapper = styled.span<WrapperProps>`
  ${({opacity}) => opacity && `opacity: ${opacity};`}
`

const StyledInput = styled.input``

const StyledLabel = styled.label``

interface Props {
  className: string
  label: string

  value: any

  opacity?: number
}
function RadioButton({ className, label, value, opacity }: Props) {
  return (
    <Wrapper className={className} opacity={opacity}>
      <StyledLabel>
        <StyledInput type="radio" value={value} />
        {label}
      </StyledLabel>
    </Wrapper>
  )
}

export default RadioButton
