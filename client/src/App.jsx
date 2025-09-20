import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop' element={<Shop/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
