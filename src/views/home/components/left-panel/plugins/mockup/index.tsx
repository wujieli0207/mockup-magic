import { IPluginComponent } from '#/plugin'
import PropsEdit from './props-edit'
import SelectMockup from './select-mockup'

const plugin = () => {
  return (
    <>
      <SelectMockup />

      {/* 模型通用数据操作 */}
      <PropsEdit />
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
