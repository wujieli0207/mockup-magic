import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'
import { IMockupComponent } from '#/mockup'
import { MockupPreview } from '@/components/Preview'
import createProps from './props'

const mockup: IMockupComponent = {
  key: 'MacbookAirM2',
  label: 'Macbook Air M2',
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
    return <div>MacbookAirM2</div>
  },
  props: createProps(),
}

export default mockup
