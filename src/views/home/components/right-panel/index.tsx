import { Card } from 'antd'

const RightPabel = () => {
  // const pluginItems = pluginList
  //   .sort((a, b) => a.order - b.order)
  //   .map((item) => {
  //     const { key, label, plugin } = item
  //     return {
  //       label,
  //       key,
  //       children: plugin(),
  //     }
  //   })

  return (
    <div className="w-64 h-screen">
      <Card className="mt-4 mr-2 panel__container">
        {/* <Tabs items={pluginItems} size="small" /> */}
      </Card>
    </div>
  )
}

export default RightPabel
