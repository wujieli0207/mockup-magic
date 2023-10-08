import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'
import { IMockupComponent } from '#/mockup'
import { MockupPreview } from '@/components/Preview'

const mockup: IMockupComponent = {
  key: 'ipad1',
  label: 'Ipad模型1',
  type: MOCUKUP_TYPE_KV.IPAD,
  preview: ({ handleBtn }) => {
    return (
      <>
        <MockupPreview src="error" handleBtn={handleBtn} />
      </>
    )
  },
  render: () => {
    return <div>Ipad模型1</div>
  },
}

export default mockup
