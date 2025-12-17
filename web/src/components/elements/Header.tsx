import React from 'react'
import { Bell } from 'lucide-react'
import { useContent } from '../../contexts/contentContext'

type headerProps = {
    userImg: string | null;
}

const Header: React.FC<headerProps> = ({ userImg }) => {

    const { setShownContentId, shownContentId } = useContent();
    const imgURL = userImg ? userImg : "avatar.png";

  return (
    <header className='flex lg:hidden p-3 px-5 w-full justify-between items-center gap-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'>
      <button onClick={() => setShownContentId('profile')}
      className={`w-full h-full justify-center items-center ${shownContentId === 'profile' ? 'hidden' : ''}`}>
        <img src={imgURL} alt="User avatar" className='rounded-full w-12 h-12 object-cover border-gray-300 border-2' />
      </button>
              
        <button className='relative p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ml-auto cursor-pointer'>
            <Bell className='w-8 h-8 text-gray-700 dark:text-gray-200' />
        </button>
    </header>
  )
}

export default Header
