import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'
import { IMockupComponent } from '#/mockup'
import { MockupPreview } from '@/components/Preview'

const mockup: IMockupComponent = {
  key: 'macbook1',
  label: 'Macbook模型1',
  type: MOCUKUP_TYPE_KV.MAC_BOOk,
  preview: ({ handleBtn }) => {
    return (
      <>
        <MockupPreview src="error" handleBtn={handleBtn} />
      </>
    )
  },
  render: () => {
    return <div>MAC模型1</div>
  },
}

export default mockup
