import LeftPanel from './components/left-panel'
import RightPabel from './components/right-panel'
import PaintingView from './components/painting-view'

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
