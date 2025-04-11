import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './Pages/auth/login'
import AuthRegister from './Pages/auth/register'
import './index.css'

function App() {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* common component */}
      <h1>Header component</h1>

      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<AuthLogin />} />
          <Route path='register' element={<AuthRegister />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
