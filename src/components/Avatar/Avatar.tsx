import * as S from './styled'

interface Props {
  src: string
}

function Avatar({ src }: Props): JSX.Element {
  return (
    <S.Wrapper>
      <S.Image src={src}></S.Image>
    </S.Wrapper>
  )
}

export default Avatar
