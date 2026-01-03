import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar: React.FC = () => {

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    
    <div className={` p-2 px-5 bg-gray-300 dark:bg-gray-800 rounded-md h-12 w-[95%] flex items-center gap-2 transition-all duration-300 ${isFocused ? 'ring-2 ring-blue-500 bg-gray-200 dark:bg-gray-700' : ''}`}>
      <input 
        type="text" 
        placeholder="Search..." 
        className='w-full h-full bg-transparent outline-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Search className={`w-8 h-8 transition-colors duration-300 ${isFocused ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} />
    </div>
  )
}

export default SearchBar;
