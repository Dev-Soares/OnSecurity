import React, { useState } from 'react'
import Input from '../ui/Input';



const SignupForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');


  return (
    <form className="py-8 w-full max-w-md px-7">
      <div className='flex flex-col gap-6 w-full'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='text-blue-600 font-semibold text-lg dark:text-white'>Nome</label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-blue-600 font-semibold text-lg dark:text-white'>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='text-blue-600 font-semibold text-lg dark:text-white'>Senha</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            password={true}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="confirmPassword" className='text-blue-600 font-semibold text-lg dark:text-white'>Confirmar Senha</label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme sua senha"
            password={true}
          />
        </div>
        <div className='flex flex-col my-4 gap-2'>
          <button 
            className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 mb-2 font-semibold cursor-pointer -translate-y-0.5'>
            Criar Conta
          </button>
        </div>
      </div>
    </form>
  )
}

export default SignupForm;
