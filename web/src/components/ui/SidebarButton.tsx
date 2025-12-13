import React from 'react'
import type { FunctionComponent } from 'react'

type SidebarButtonProps = {
    text: string;
    path?: string;
    icon: React.ReactNode;
}

const SidebarButton: FunctionComponent<SidebarButtonProps> = ({ text, icon }) => {
  return (
    <button className='w-full h-auto p-3 text-blue-500 dark:text-white hover:bg-gray-300 hover:dark:bg-gray-800 hover:translate-y-[-2px] transition-all duration-300 flex justify-start items-center gap-3 rounded-md text-xl! font-medium cursor-pointer'>
        {icon}
        <p className='mt-1'>{text}</p>
    </button>
  )
}

export default SidebarButton
