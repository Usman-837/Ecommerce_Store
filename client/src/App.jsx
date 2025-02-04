import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/AuthLayout'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
