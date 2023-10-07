import { IMockupComponent } from 'types/mockup'

const modules = import.meta.glob('./**/*.(tsx|vue)', { eager: true })
const mockupList: IMockupComponent[] = []

for (const key in modules) {
  const module = (modules[key] as any).default
  mockupList.push(module)
}

export default mockupList
