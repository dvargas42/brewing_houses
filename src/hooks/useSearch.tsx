import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useApiData } from './useApiData'

interface BrewerProps {
  abv: number,
  address: string,
  category: string,
  city: string,
  coordinates: [number, number],
  country: string,
  description: string,
  ibu: number,
  name: string,
  state: string,
  website: string,
}

interface SearchContextProps {
  data: BrewerProps[];
  totalCount: number;
  isLoading: boolean;
  error: boolean;
  createSearch: (value: string) => void;
  createFiltr: (value: string) => void;
  createSort: (value: string) => void;
}

interface SearchProviderProps {
  children: ReactNode
}

const totalCount = 200 //Results limiter from the api

const SearchContext = createContext({} as SearchContextProps)

export function SearchProvider({children}: SearchProviderProps) {
  const { data, isLoading, error } = useApiData(totalCount)

  const [sort, setSort] = useState<string>('')
  const [filtr, setFiltr] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(true)
  const [totalPages, setTotalPages] = useState<number>(null)
  const [searchData, setSearchData] = useState<BrewerProps[]>()

  function createSearch(value: string) {
    if(!(!!value)) {
      setToggle(!toggle)
      setSearch('')
    }
    setSearch(value.toLowerCase())
    setToggle(!toggle)
  }

  function createFiltr(value: string) {
    if(!(!!value)) {
      setFiltr('')
    }
    setFiltr(value.toLowerCase())
  }
  
  function createSort(value: string) {
    if(!(!!value)) {
      setSort('')
    }
    setSort(value.toLowerCase())
  }
  
  useEffect(() => {
    if(!!search) {
      if (filtr === "establishment") {
        console.log(search)
        let response = data.filter(item => item.name?.toLowerCase().includes(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return b.name.localeCompare(a.name)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }

      if (filtr === "abv") {
        console.log(search)
        let response = data.filter(item => item.abv?.toFixed(2).startsWith(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return Number(a.abv) - Number(b.abv)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return Number(b.abv) - Number(a.abv)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }

      if (filtr === "ibu") {
        console.log(search)
        let response = data.filter(item => item.ibu?.toString().startsWith(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return Number(a.ibu) - Number(b.ibu)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return Number(b.ibu) - Number(a.ibu)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }

      if (filtr === "category") {
        console.log(search)
        let response = data.filter(item => item.category?.toLowerCase().includes(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return a.category.localeCompare(b.category)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return b.category.localeCompare(a.category)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }
      if (filtr === "city") {
        console.log(search)
        let response = data.filter(item => item.city?.toLowerCase().includes(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return a.city.localeCompare(b.city)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return b.city.localeCompare(a.city)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }
      if (filtr === "state") {
        console.log(search)
        let response = data.filter(item => item.state?.toLowerCase().includes(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return a.state.localeCompare(b.state)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return b.state.localeCompare(a.state)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }

      if (filtr === "country") {
        console.log(search)
        let response = data.filter(item => item.country?.toLowerCase().includes(search))
  
        if (sort === 'asc') {
          response = response.sort((a, b) => {
            return a.country.localeCompare(b.country)
          })
        }
  
        if (sort === 'desc') {
          response = response.sort((a, b) => {
            return b.country.localeCompare(a.country)
          })
        }
        setTotalPages(response.length)
        setSearchData(response)
        return
      }
    }

    setTotalPages(null)
    setSearchData(null)

  }, [toggle])

  return (
    <SearchContext.Provider value={{
      data: !!searchData ? searchData : data,
      totalCount: !!totalPages ? totalPages: totalCount,
      isLoading,
      error: !!error,
      createSearch,
      createFiltr,
      createSort,
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  return useContext(SearchContext)
}