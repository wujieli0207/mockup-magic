import { IFrameComponent } from '#/frame'

const modules = import.meta.glob('./**/*.(tsx)', { eager: true })
const mockupList: IFrameComponent[] = []

for (const key in modules) {
  const module = (modules[key] as any).default
  mockupList.push(module)
}

const orderedMockupList = mockupList.sort((a, b) => a.order - b.order)

export default orderedMockupList
