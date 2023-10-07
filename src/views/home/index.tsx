import LeftPanel from '@/views/left-panel'
import RightPabel from '@/views/right-panel'
import PaintingView from '@/views/painting-view'

const Home = () => {
  return (
    <div className="flex justify-between">
      <LeftPanel />
      <PaintingView />
      <RightPabel />
    </div>
  )
}

export default Home
