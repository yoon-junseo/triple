import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'

import Router from '@/router'

import { GlobalStyle } from '@/styles/GlobalStyle'
import Theme from '@/styles/Theme'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Suspense fallback={<></>}>
        <Router />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
