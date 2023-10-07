import { MOCUKUP_TYPE_KV } from '@/constants/mockup-contant'
import { IMockupComponent } from 'types/mockup'

const mockup: IMockupComponent = {
  label: 'Ipad模型1',
  type: MOCUKUP_TYPE_KV.IPAD,

  render: () => {
    return <div>Ipad模型1</div>
  },
}

export default mockup
