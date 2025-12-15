import React from 'react'
import { ChevronLeft } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import SignupForm from '../components/forms/SignupForm'
import LogoIcon from '../components/ui/LogoIcon'



const SignupPage: React.FC = () => {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className='bg-gradient-to-r from-blue-700 to-blue-900 lg:bg-none lg:bg-white lg:dark:bg-gray-900 flex flex-col  h-full lg:min-h-screen lg:pb-24'>
        <div className='  lg:h-full w-full p-1 flex flex-col lg:mt-4'>  
          <button onClick={() => navigate(-1)}
            className='flex flex-row text-white justify-start items-center m-1 my-4 cursor-pointer z-50 w-fit lg:hidden'>
            <ChevronLeft className="w-10 lg:w-16 h-10 lg:h-16 text-white cursor-pointer" />
            <p className='text-xl lg:text-2xl font-medium'>Voltar</p>
          </button>
          <div className='flex flex-col lg:justify-center lg:items-center gap-2'>
            <div className='w-full h-auto text-white flex flex-row items-center justify-center my-3 lg:hidden'>
              <LogoIcon color='light'  size={80} />
              <h2 className='font-semibold text-3xl '>OnSecurity</h2>
            </div>
            <div className='w-full h-auto text-white hidden lg:flex flex-row items-center justify-center my-3 '>
              <LogoIcon color='dark' size={160} />
              <h2 className='font-semibold text-5xl text-blue-600'>OnSecurity</h2>
            </div>
            <div className='w-full h-auto text-white flex flex-row items-center justify-center lg:hidden my-3'>
              <h1 className='text-4xl font-bold text-white z-10 flex justify-center items-center my-8 w-[70%] '>
                Criar Conta
              </h1>
            </div>

          </div>
        </div>

        <div className=' flex flex-col justify-center items-center z-10 w-full bg-gray-100 dark:bg-gray-800 rounded-t-3xl md:rounded-t-4xl lg:rounded-xl pt-4 lg:w-[40%] xl:w-[30%] self-center lg:h-full lg:shadow-2xl lg:border lg:border-gray-200 dark:lg:border-gray-700 '>
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default SignupPage

