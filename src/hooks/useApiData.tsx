import { useQuery } from 'react-query'
import { api } from '../services/axios'

interface Brewers {
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

export async function getApiData(numberOfItems: number) {
  const { data } = await api.get(`random/${numberOfItems}`)
  
  const brewers: Brewers[] = data.map(item => {
    return {
      abv: item.abv,
      address: item.address,
      category: item.category,
      city: item.city,
      coordinates: item.coordinates,
      country: item.country,
      description: item.description,
      ibu: item.ibu,
      name: item.name,
      state: item.state,
      website: item.website,
    }
  })

  return brewers
}

export function useApiData(numberOfItems: number) {
  return useQuery(['brewers'], () => getApiData(numberOfItems), {
    staleTime: 1000 * 60 * 24 // 24 hours 
  })
}