import { createContext, ReactNode, useState, useRef } from "react";

const defaultSearchState = {search: ''}

type ContextProviderProps = {
  children: ReactNode
}

type SearchContextType = {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const SearchContextProvider = ({children} : ContextProviderProps) => {
  const [search, setSearch] = useState<string>(defaultSearchState.search)
  return <SearchContext.Provider value={{search, setSearch}}>{children}</SearchContext.Provider>
}

const defaultListState = [{selected: false, type:{ tag:'default', function: null}, page: 'home'}]

export const ListContext = createContext<ListContextType | null>(null)


type ListContextType = {
  
  listCont: object,
  setListCont: React.Dispatch<React.SetStateAction<object>>,
}

export const ListContextProvider = ({children} : ContextProviderProps) => {
  const [listCont, setListCont] = useState<object>(defaultListState)
  return <ListContext.Provider value={{listCont, setListCont}} >{children}</ListContext.Provider>
}