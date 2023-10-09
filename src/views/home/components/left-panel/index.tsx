import { Card, Tabs } from 'antd'
import pluginList from './plugins'
import Header from '../header'
import './index.less'

const LeftPanel = () => {
  const pluginItems = pluginList
    .sort((a, b) => a.order - b.order)
    .map((item) => {
      const { key, label, plugin } = item
      return {
        label,
        key,
        children: plugin(),
      }
    })

  return (
    <div className="h-screen w-60">
      <Header />

      <Card className="mt-2 ml-2 left-panel__container">
        <Tabs items={pluginItems} size="small" />
      </Card>
    </div>
  )
}

export default LeftPanel
