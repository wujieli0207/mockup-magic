import { MOCUKUP_TYPE_KV } from '@/constants/mockup-constant'
import { IMockupComponent } from '#/mockup'
import { MockupPreview } from '@/components/Preview'
import createProps from './props'

const mockup: IMockupComponent = {
  key: 'IpadPro11',
  label: 'Ipad Pro 11',
  type: MOCUKUP_TYPE_KV.IPAD,
  isNew: false,
  details: {
    device: 'Apple iPad Pro 11"',
    screenPixels: '1668 x 2388',
    releaseYear: 2021,
  },
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
    return <div>Ipad Pro 11</div>
  },
  props: createProps(),
}

export default mockup
