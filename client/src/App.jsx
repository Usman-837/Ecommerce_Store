import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/Auth/AuthLayout'
import AuthRegister from './pages/Auth/AuthRegister'
import AuthLogin from './pages/Auth/AuthLogin'
import AdminLayout from './components/Admin-View/AdminLayout'
import AdminDashboard from './pages/Admin-View/AdminDashboard'
import AdminFeatures from './pages/Admin-View/AdminFeatures'
import AdminOrders from './pages/Admin-View/AdminOrders'
import ShoppingLayout from './components/Shopping-View/ShoppingLayout'
import NotFound from './pages/Not-Found/NotFound'
import ShoppingHome from './pages/Shopping-View/ShoppingHome'
import ShoppingListing from './pages/Shopping-View/ShoppingListing'
import ShoppingCheckout from './pages/Shopping-View/ShoppingCheckout'
import ShoppingAccount from './pages/Shopping-View/ShoppingAccount'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}>
          <Route path='login' element={<AuthLogin/>}/>
          <Route path='register' element={<AuthRegister/>}/>
        </Route>
        <Route path='admin' element={<AdminLayout/>}>
          <Route path='dashboard' element={<AdminDashboard/>} />
          <Route path='products' element={<AdminFeatures/>} />
          <Route path='orders' element={<AdminOrders/>}/>
          <Route path='features' element={<AdminFeatures/>}/>
        </Route>
        <Route path='/shop' element={<ShoppingLayout/>}>
            <Route path='home' element={<ShoppingHome/>}/>
            <Route path='listing' element={<ShoppingListing/>}/>
            <Route path='checkout' element={<ShoppingCheckout/>}/>
            <Route path='account' element={<ShoppingAccount/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
