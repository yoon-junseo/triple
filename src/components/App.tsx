import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/GlobalStyle'
import Theme from '@/styles/Theme'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>junseo's project setting</div>
    </ThemeProvider>
  )
}

export default App
