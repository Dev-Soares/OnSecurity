import React from 'react'
import ArticleCard from '../ui/ArticleCard'
import SearchBar from '../ui/SearchBar'

const ArticleContent: React.FC = () => {
  return (
    <main className='pb-16 pt-4'>
      <div className='p-2 flex justify-center items-center'>
        <SearchBar />
      </div>
      <div className='flex justify-center w-full'>
        <div className=' p-2 px-4 xl:px-5 flex flex-wrap gap-8 justify-start md:justify-center xl:justify-start max-w-[970px] items-center mt-3'>
          <ArticleCard
            title="Sample Article Title"
            description="This is a sample article content to demonstrate the ArticleCard component."
            bgUrl='teste.jpeg'
            id="teste"
          />
        </div>

      </div>

    </main>
  )
}

export default ArticleContent
