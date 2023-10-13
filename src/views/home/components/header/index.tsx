import { Card } from 'antd'
import { AppstoreFilled, MessageFilled, SettingFilled } from '@ant-design/icons'

const Header = () => {
  function handleSetting() {
    console.log('handleSetting')
  }

  function handleFeedback() {
    console.log('handleFeedback')
  }

  return (
    <Card bordered={false} className="h-12 mt-2 ml-2">
      <div className="flex items-center justify-between">
        <div className="flex">
          {/* TODO icon 需要更新 */}
          <AppstoreFilled className="mr-2" />

          <div className="text-xl font-medium w-36">Mockup Magic</div>
        </div>

        <div className="flex">
          <div
            className="px-2 py-1 -ml-4 rounded-md cursor-pointer hover:bg-gray-200"
            onClick={handleFeedback}
          >
            <MessageFilled className="text-gray-400" />
          </div>
          <div
            className="px-2 py-1 ml-1 rounded-md cursor-pointer hover:bg-gray-200"
            onClick={handleSetting}
          >
            <SettingFilled className="text-gray-400" />
          </div>
        </div>
      </div>
    </Card>

    // <div className="flex items-center justify-center text-xl bg-white">
    //   {/* ICON */}

    // </div>
  )
}

export default Header
