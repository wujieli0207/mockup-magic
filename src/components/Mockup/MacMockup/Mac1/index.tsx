import { MOCUKUP_TYPE_KV } from '@/constants/mockup-contant'
import { IMockupComponent } from '#/mockup'

const mockup: IMockupComponent = {
  label: 'MAC模型1',
  type: MOCUKUP_TYPE_KV.MAC,

  render: () => {
    return <div>MAC模型1</div>
  },
}

export default mockup
