import CommonForm from '@/components/common/form'
import { registorFormControls } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthRegister = () => {

  const initialState = {
    userName: '',
    email: '',
    password: ''
  }

  const [formData, setFormData] = useState(initialState)

  const onSubmit = () => {

  }


  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground'>Create New account</h1>
        <p className='mt-2'>Already have an account
          <Link className='font-medium text-primary hover:underline ml-2' to='/auth/login'>Login</Link>
        </p>
      </div>
      <CommonForm
        formControls={registorFormControls}
        buttonText={'Sign Up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default AuthRegister
