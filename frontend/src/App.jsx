import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Createpage from './pages/Createpage'
import NoteDetailsPage from './pages/NoteDetailsPage'

const App = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background: radial-gradient (125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]'/>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<Createpage />} />
        <Route path='/note/:id' element={<NoteDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
