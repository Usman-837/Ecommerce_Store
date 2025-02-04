import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'
import AuthRegister from './pages/auth/AuthRegister'
import AuthLogin from './pages/auth/AuthLogin'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <h1>Header Component</h1>
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}>
          <Route path='login' element={<AuthLogin/>}/>
          <Route path='register' element={<AuthRegister/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
