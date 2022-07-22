import { useTheme, Global, css } from '@emotion/react'

function GlobalStyles() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        *,
        *:after,
        *:before {
          font-family: ${theme.typography.fontFamily};
        }
      `}
    />
  )
}

export default GlobalStyles
