import { IPluginComponent } from '#/plugin'

const plugin = () => {
  return <>frame</>
}

const frame: IPluginComponent = {
  key: 'framePlugin',
  label: '背景',
  order: 2,
  plugin,
}

export default frame
