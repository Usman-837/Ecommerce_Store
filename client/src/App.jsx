import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './Pages/auth/login'
import AuthRegister from './Pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './Pages/admin-view/dashboard'
import AdminFeatures from './Pages/admin-view/features'
import AdminOrders from './Pages/admin-view/orders'
import AdminProducts from './Pages/admin-view/products'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './Pages/not-found'
import './index.css'

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<AuthLogin />} />
          <Route path='register' element={<AuthRegister />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>
        <Route path='/shop' element={<ShoppingLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
