import React from 'react'

type ProfileCardProps = {
    username?: string
    avatarUrl?: string 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
    username = "Convidado",
    avatarUrl= "/avatar.png"}) => {

  return (
    <div className='flex gap-2 justify-start items-center p-2 border-t border-blue-500 dark:border-gray-700 w-full pt-4'>
        <img src={avatarUrl} alt={`${username}'s avatar`} className='w-15 h-15 rounded-full border-2 border-gray-300 dark:border-gray-700' />
        <div className='mt-2 flex flex-col'>
            <p className='font-semibold text-lg'>{username}</p>
            <a href="/perfil" className='text-md text-blue-600 dark:text-blue-400 hover:underline'>Ver Perfil</a>
        </div>     
    </div>
  )
}

export default ProfileCard
