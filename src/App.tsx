import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'

import Home from 'pages/Home'
import Dashboard from 'pages/Dashboard'
import CreateQuiz from 'pages/CreateQuiz'

import Auth0ProviderWithRedirectCallback from 'utils/Auth0Provider'
import ProtectedRoute from 'utils/ProtectedRoute'
import GlobalStyles from 'globalStyles'

import theme from 'theme'

const muiTheme = createTheme(theme)

function App() {
  return (
    <>
      <BrowserRouter>
        <Auth0ProviderWithRedirectCallback>
          <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme />
              <GlobalStyles />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/dashboard"
                  element={<ProtectedRoute component={Dashboard} />}
                />
                <Route path="/quiz">
                  <Route path="new" element={<CreateQuiz />} />
                </Route>
              </Routes>
            </ThemeProvider>
          </MuiThemeProvider>
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    </>
  )
}

export default App
