import React from 'react'
import { CaretLeft } from "@phosphor-icons/react"
import { useNavigate } from 'react-router-dom'
import SignupForm from '../components/forms/SignupForm'
import LogoIcon from '../components/ui/LogoIcon'

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen">
      <div className='bg-linear-to-r from-blue-700 to-blue-900 flex flex-col lg:flex-row h-full'>
        <div className='lg:h-full lg:w-[50%] w-full p-1 flex flex-col lg:mt-4'>
          <button onClick={() => navigate('/')}
            className='flex flex-row text-white justify-start items-center m-1 my-4 cursor-pointer z-50 w-fit lg:hidden'>
            <CaretLeft size={40} weight="bold" className="text-white cursor-pointer" />
            <p className='text-xl lg:text-2xl font-medium'>Voltar</p>
          </button>
          <div className='flex flex-col lg:justify-center lg:items-center gap-2'>
            <div className='w-full h-auto text-white flex flex-row items-center justify-center my-3 lg:hidden'>
              <LogoIcon color='light' size={80} />
              <h2 className='font-semibold text-3xl'>SecurityOn</h2>
            </div>
            <div className='w-full h-auto text-white hidden lg:flex flex-row items-center justify-center my-3 '>
              <LogoIcon color='light' size={140} />
              <h2 className='font-semibold text-4xl text-white'>SecurityOn</h2>
            </div>
            <div className='w-full h-auto text-white flex flex-row items-center justify-center lg:hidden my-3'>
              <h1 className='text-4xl font-bold text-white z-10 flex justify-center items-center m-8 w-[70%] '>
                Criar Conta
              </h1>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center z-10 w-full bg-gray-100 dark:bg-gray-900 rounded-t-3xl md:rounded-t-4xl lg:rounded-l-3xl lg:pl-8 lg:rounded-t-none pt-4 lg:w-[50%] self-center lg:h-screen lg:p-0 lg:shadow-2xl lg:border lg:border-gray-200 dark:lg:border-gray-700'>
          <SignupForm />
        </div>
      </div>
    </main>
  )
}

export default SignupPage

