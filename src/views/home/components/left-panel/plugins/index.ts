import { IPluginComponent } from '#/plugin'

const modules = import.meta.glob('./*/index.tsx', { eager: true })
const pluginList: IPluginComponent[] = []

for (const key in modules) {
  const module = (modules[key] as any).default
  pluginList.push(module)
}

export default pluginList
