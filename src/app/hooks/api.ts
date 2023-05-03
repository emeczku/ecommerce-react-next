import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const usePost = (url: string) => {
  return useQuery({
    queryFn: async () => {
      return await axios.post(url)
    },
    onSuccess(data) {
      return data
    },
    onError(err: Error) {
      console.error(err)
    },
  })
}

export const useGet = (url: string) => {
  return useQuery({
    queryFn: async () => {
      return await axios.get(url)
    },
    onSuccess(data) {
      return data
    },
    onError(err: Error) {
      console.error(err)
    },
  })
}
