import { IReduxState } from '@/redux'
import { useSelector } from 'react-redux'
import { handleSetSelectedProps } from './utils'
import { IMockupInstance } from '#/painting'

const subTitle = (subTitle: string) => {
  return <div className="text-base text-gray-500">{subTitle}</div>
}

const PropsEdit = () => {
  const painting = useSelector((state: IReduxState) => state.painting)
  const { mockupInstance } = painting

  function handlePropsClick(props: unknown) {
    console.log('props: ', props)
    handleSetSelectedProps(mockupInstance as IMockupInstance, props)
  }

  return (
    <div className="mt-4">
      {/* styles 编辑 */}
      {mockupInstance.props?.styles && (
        <div>
          {subTitle('Styles')}

          <div className="flex flex-wrap mt-2 cursor-pointer">
            {mockupInstance.props?.styles.map((item) => {
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center mb-2 mr-2"
                  onClick={() =>
                    handlePropsClick({
                      style: item,
                    })
                  }
                >
                  <img
                    className={`w-16 aspect-[4/3] bg-zinc-200 rounded ${
                      mockupInstance.selectedProps?.style?.label === item.label
                        ? 'border border-black border-solid'
                        : ''
                    }`}
                    src={item.imgUrl}
                  />
                  <div className="mt-1 text-xs">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default PropsEdit
