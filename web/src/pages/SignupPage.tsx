import React from 'react'
import { ChevronLeft } from "lucide-react"
import SignupForm from '../components/forms/SignupForm'
import { useNavigate } from 'react-router-dom'
import LogoIcon from '../components/ui/LogoIcon'

const SignupPage: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 overflow-hidden">
      <div className='bg-blue-600'>
        <div className=' h-1/3 w-full p-1 flex flex-col z-0'>
          <button onClick={() => navigate(-1)}
            className='flex flex-row text-white justify-start items-center m-1 my-4'>
            <ChevronLeft className="w-10 h-10 text-white cursor-pointer" />
            <p className='text-xl font-medium'>Voltar</p>
          </button>
          <div className='flex flex-col gap-2'>
            <div className='w-full h-auto text-white flex flex-row items-center justify-center my-3'>
              <LogoIcon size={80} />
              <h2 className='font-semibold text-3xl'>OnSecurity</h2>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-white z-10 flex justify-start items-start m-8 w-[70%]'>
              Criar Conta
            </h1>
          </div>
        </div>

        <div className='h-2/3 flex flex-col justify-center items-center z-10 w-full bg-white dark:bg-gray-900 rounded-t-4xl pt-4'>
            <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default SignupPage
