import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePost = (url: string) => {
  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      return await axios.post(url)
    },
  })

  return { data, isLoading, error }
}

export const useGet = (url: string) => {
  const { data, isLoading, error } = useQuery({
    queryFn: async () => {
      return await axios.get(url)
    },
  })

  return { data, isLoading, error }
}
