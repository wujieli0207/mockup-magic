import LeftPanel from './components/left-panel'
import RightPabel from './components/right-panel'
import PaintingView from './components/painting-view'
import Header from './components/header'

const Home = () => {
  return (
    <>
      <Header />

      <div className="flex justify-between bg-zinc-200">
        <LeftPanel />
        <PaintingView />
        <RightPabel />
      </div>
    </>
  )
}

export default Home
