import React, { useState, useEffect, useContext, useRef } from 'react'
import { SearchContext } from '../context/context'

type SearchbarProps = {
  placeholder?: string,
  itemsRef: React.MutableRefObject<object>,
  id: string,
  handleKeyPress: any
};

const Searchbar = ({
  placeholder = 'What do you need',
  itemsRef, id, handleKeyPress
}: SearchbarProps) => {

  const searchContext = useContext(SearchContext)

  const [search, setSearch] = useState<string>("")

  useEffect(() => {
    if (searchContext) {
      searchContext.setSearch(search)
    }
  }, [search])


  return (
    <input
      className=" sticky top-0 text-2xl text-shark-100 placeholder:text-shark-400 block bg-shark-800 w-full border-x-0 border-b-2 border-shark-200 py-2 pb-3 px-4 shadow-sm focus:outline-none"
      placeholder={placeholder}
      type="text"
      autoComplete="off"
      tabIndex={0}
      ref={ref => { itemsRef.current[id] = ref }}
      onKeyUp={(e) => handleKeyPress(e, id)}
      onChange={(e) => setSearch(e.target.value)}
      onFocus={(e) => handleKeyPress(e, id, false)}
      name="search" />
  )
}

export default Searchbar