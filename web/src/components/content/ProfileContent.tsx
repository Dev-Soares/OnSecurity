import React from 'react'
import { Settings, Pencil } from 'lucide-react'

const ProfileContent: React.FC = () => {
  return (
    <main className=' min-h-screen pb-28 md:pb-16 lg:pb-0 lg:py-8 lg:px-8 flex flex-col gap-6 bg-white dark:bg-gray-900'>
      <div className="w-full relative flex flex-col rounded-b-3xl">
        <div className='bg-blue-600 h-40 rounded-b-3xl lg:rounded-xl'>

        </div>
        <button className='absolute rounded-full w-34 h-34 z-50 top-1/2 left-1/5 md:left-1/8 lg:left-1/6 md:w-40 md:h-40 transform -translate-x-1/2 -translate-y-1/2  xl:w-50 xl:h-50 xl:left-1/8 border-none self-start shadow-lg'>
          <img src="avatar.png" alt="" className='rounded-full' />
        </button>
        <div className='bg-none h-30 rounded-t-3xl w-full'>
          <div className='flex flex-col items-start justify-start mt-10 p-4 sm:p-6 pt-12 sm:pt-16 gap-4 sm:gap-5 md:gap-6'>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="nome" className='font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base lg:text-lg uppercase tracking-wide'>Nome</label>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-white ml-1 '>Bernardo Soares</h2>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="nascimento" className='font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base lg:text-lg uppercase tracking-wide'>Data de Nascimento</label>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-white ml-1 '>15/03/1998</h2>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="email" className='font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base lg:text-lg uppercase tracking-wide'>Email</label>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-white ml-1 '>bernardo.soares@email.com</h2>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="senha" className='font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base lg:text-lg uppercase tracking-wide'>Senha</label>
              <h2 className='text-base sm:text-lg md:text-xl lg:text-xl font-medium text-gray-900 dark:text-white ml-1 '>••••••••••</h2>
            </div>
            <div className='flex gap-3'>
              <button className='px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:scale-105 transition-all duration-500 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 cursor-pointer group'>
                <Pencil className='w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-gray-200 group-hover:text-white transition-colors duration-300' />
                <p className='text-sm md:text-base lg:text-lg text-blue-600 dark:text-gray-200 group-hover:text-white font-semibold cursor-pointer transition-colors duration-300'>Editar</p>
              </button>
              <button className='px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 hover:scale-105 transition-all duration-500 flex items-center gap-2 bg-gray-100 dark:bg-gray-800 cursor-pointer group'>
                <Settings className='w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-gray-200 group-hover:text-white transition-colors duration-300' />
                <p className='text-sm md:text-base lg:text-lg text-blue-600 dark:text-gray-200 group-hover:text-white font-semibold cursor-pointer transition-colors duration-300'>Configurações</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProfileContent
