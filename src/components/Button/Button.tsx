import { MouseEventHandler, ReactNode } from 'react'
import * as S from './styled'

interface Props {
  icon?: ReactNode
  children: string
  className?: string
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({
  children,
  icon,
  onClick = () => {},
  disabled = false,
  className = '',
}: Props): JSX.Element {
  return (
    <S.Button disabled={disabled} onClick={onClick} className={className}>
      {icon && <S.Icon>{icon}</S.Icon>}
      {children}
    </S.Button>
  )
}

export default Button
