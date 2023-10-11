import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'
import { IMockupComponent } from '#/mockup'
import { MockupPreview } from '@/components/Preview'
import createProps from './props'

const mockup: IMockupComponent = {
  key: 'iPhone 15',
  label: 'iPhone 15',
  type: MOCUKUP_TYPE_KV.IPHONE,
  isNew: true,
  preview: () => {
    const currentProps = mockup.props
    return (
      <div>
        <MockupPreview
          label={mockup.label}
          isNew={mockup.isNew}
          src={currentProps.layouts[0].imgUrl!}
          layouts={currentProps.layouts}
        />
      </div>
    )
  },
  render: () => {
    return <div>Ipad模型1</div>
  },
  props: createProps(),
}

export default mockup
