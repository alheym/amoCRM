import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import MainPage from './pages/MainPage'

import { GlobalStyle } from './global-styles'

const container = document.getElementById('root') as HTMLElement

const initialChildren = (
  <Router>
    <StrictMode>
      <GlobalStyle />
      <MainPage />
    </StrictMode>
  </Router>
)

const root = createRoot(container)
root.render(initialChildren)
