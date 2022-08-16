import React, { useState, useEffect, useContext } from 'react'
import { SearchContext } from '../context/context'
import useEventListener from '@use-it/event-listener'


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

  useEffect(() => {
    const inputRef = itemsRef.current[id]
    inputRef.focus();
  }, [])


  const inputHandler = (keyEvent) => {

    const inputRef = itemsRef.current[id]

    if (keyEvent.keyCode >= 48 && keyEvent.keyCode <= 120) {
      inputRef.focus();
      
    }

  }

  useEventListener('keypress', inputHandler);



  return (
    <input
      className="sticky top-0 text-2xl text-text placeholder:text-text block bg-background w-full border-x-0 border-b-2 border-input_border_inactive py-2 pb-3 px-4 shadow-sm focus:outline-none focus:border-input_border focus:bg-active"
      placeholder={placeholder}
      type="text"
      autoComplete="off"
      autoFocus={true}
      tabIndex={0}
      ref={ref => { itemsRef.current[id] = ref }}
      onKeyUp={(e) => handleKeyPress(e, id)}
      onChange={(e) => setSearch(e.target.value)}
      onFocus={(e) => handleKeyPress(e, id, false)}
      name="search" />
  )
}

export default Searchbar