import { Tabs } from 'antd'
import pluginList from './plugins'

const LeftPanel = () => {
  console.log('pluginList: ', pluginList)

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
    <div className="w-48 h-screen shadow">
      <div className="flex items-center justify-center text-xl">
        Mockup Magic
      </div>

      <Tabs items={pluginItems} tabPosition="left" size="small" />
    </div>
  )
}

export default LeftPanel
