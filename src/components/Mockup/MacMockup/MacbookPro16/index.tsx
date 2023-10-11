import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'
import { IMockupComponent } from '#/mockup'
import { MockupPreview } from '@/components/Preview'
import createProps from './props'

const mockup: IMockupComponent = {
  key: 'MacbookPro16',
  label: 'Macbook Pro 16',
  type: MOCUKUP_TYPE_KV.MAC_BOOK,
  isNew: false,
  preview: ({ isFocus }) => {
    const currentProps = mockup.props
    return (
      <div>
        <MockupPreview
          label={mockup.label}
          isNew={mockup.isNew}
          src={currentProps.layouts[0].imgUrl!}
          layouts={currentProps.layouts}
          isFocus={isFocus}
        />
      </div>
    )
  },
  render: () => {
    return <div>Macbook Pro 16</div>
  },
  props: createProps(),
}

export default mockup
