import React from 'react'
import { useContent } from '../../contexts/contentContext'

type ProfileCardProps = {
    username?: string
    avatarUrl?: string 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
    username = "Convidado",
    avatarUrl= "/avatar.png"}) => {

    const { setShownContentId } = useContent();

  return (
    <div className='flex gap-2 justify-start items-center p-2 border-t border-blue-500 dark:border-gray-700 w-full pt-4'>
        <img src={avatarUrl} alt={`${username}'s avatar`} className='w-15 h-15 rounded-full border-2 border-gray-300 dark:border-gray-700' />
        <div className='mt-2 flex flex-col justify-center items-start'>
            <p className='font-semibold text-lg'>{username}</p>
            <button onClick={() => setShownContentId('profile')} className='cursor-pointer text-md text-blue-500 dark:text-blue-400 hover:underline ml-1'>Ver Perfil</button>
        </div>     
    </div>
  )
}

export default ProfileCard
