import { MOCUKUP_TYPE_KV } from '@/constants/mockup-contant'
import { IMockupComponent } from '#/mockup'

const mockup: IMockupComponent = {
  label: 'MAC模型2',
  type: MOCUKUP_TYPE_KV.MAC,

  render: () => {
    return <div>MAC模型2</div>
  },
}

export default mockup
