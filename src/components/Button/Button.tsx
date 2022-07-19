import { MouseEventHandler, ReactNode } from 'react'
import * as S from './styled'

interface Props {
  icon?: ReactNode
  children: string
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({
  children,
  icon,
  onClick = () => {},
  className = '',
}: Props): JSX.Element {
  return (
    <S.Button onClick={onClick} className={className}>
      {icon && <S.Icon>{icon}</S.Icon>}
      {children}
    </S.Button>
  )
}

export default Button
