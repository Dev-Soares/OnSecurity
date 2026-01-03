import React from 'react'
import { ArrowRight } from '@phosphor-icons/react'

interface ArticleCardProps {
    title: string;
    description?: string;
    bgUrl?: string | false;
    id: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, id, bgUrl }) => {

  return (
        <button className={`w-full h-75 md:h-85 xl:h-90 bg-cover bg-center rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900 bg-opacity-50 overflow-hidden flex flex-col justify-end group cursor-pointer hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 max-w-md`}>
            <div className={`${bgUrl ? '' : 'bg-blue-500'} w-full h-full rounded-b-lg overflow-hidden`}>
                {bgUrl && <img src={bgUrl} alt={title} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' />}
            </div>
            <div className="w-full h-full p-4 flex flex-col justify-start items-start rounded-2xl text-blue-600 dark:text-white">
                <h2 className=" text-2xl font-bold mb-2">{title}</h2>
                {description && <p className=" text-sm text-start">{description}</p>}
            </div>
            <div className='p-4 bg-opacity-90 hover:bg-opacity-100 transition-all cursor-pointer text-blue-600 dark:text-white font-semibold flex items-center gap-2'>
                <p>
                    Read Article
                </p>
                    <ArrowRight size={20} weight="regular" className="group-hover:translate-x-1 transition-transform" />
                
            </div>
        </button>
  )
}

export default ArticleCard
