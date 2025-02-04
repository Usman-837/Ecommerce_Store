import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/Auth/AuthLayout'
import AuthRegister from './pages/Auth/AuthRegister'
import AuthLogin from './pages/Auth/AuthLogin'
import AdminLayout from './components/Admin-View/AdminLayout'
import AdminDashboard from './pages/Admin-View/AdminDashboard'
import AdminFeatures from './pages/Admin-View/AdminFeatures'
import AdminOrders from './pages/Admin-View/AdminOrders'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header Component</h1>
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
      </Routes>
    </div>
  )
}

export default App
