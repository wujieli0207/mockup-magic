import { IPluginComponent } from '#/plugin'
import SelectFrame from './select-frame'

const plugin = () => {
  return (
    <>
      <SelectFrame />
    </>
  )
}

const frame: IPluginComponent = {
  key: 'framePlugin',
  label: '背景',
  order: 2,
  plugin,
}

export default frame
