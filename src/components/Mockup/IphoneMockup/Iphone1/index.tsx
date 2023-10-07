import { MOCUKUP_TYPE_KV } from '@/constants/mockup-contant'
import { IMockupComponent } from 'types/mockup'

const mockup: IMockupComponent = {
  label: 'Iphone模型1',
  type: MOCUKUP_TYPE_KV.IPHONE,

  render: () => {
    return <div>IPhone模型1</div>
  },
}

export default mockup
