import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import DetailsPage from './components/shop/DetailsPage'
import Wishlist from './pages/WishList'
import Cart from './pages/Cart'
import Checkout from './pages/CheckOut'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/shop' element={<Shop/>} />
            <Route path='/shop/:slug' element={<DetailsPage/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
