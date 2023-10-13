import { IPluginComponent } from '#/plugin'
import SelectMockup from './select-mockup'

const plugin = () => {
  return (
    <>
      <SelectMockup />

      {/* 模型通用数据操作 */}
    </>
  )
}

const mockup: IPluginComponent = {
  key: 'mockupPlugin',
  label: '模型',
  order: 1,
  plugin,
}

export default mockup
