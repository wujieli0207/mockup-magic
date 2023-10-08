import { ConfigProvider } from 'antd'
import { HashRouter } from 'react-router-dom'
import Router from '@/router'

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            verticalItemPadding: '8px 8px',
          },
        },
      }}
    >
      <HashRouter>
        <Router />
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
