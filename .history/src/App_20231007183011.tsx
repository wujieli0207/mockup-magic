import { HashRouter } from 'react-router-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Router from '@/router'

function App() {
  return (
    <>
      <HashRouter>
        <GeistProvider>
          <CssBaseline />

          <Router />
        </GeistProvider>
      </HashRouter>
    </>
  )
}

export default App
