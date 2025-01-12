import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CreateDataProps } from '../utils/types'

const baseURL = process.env.REACT_APP_API_BASE_URL

const urls = [`${baseURL}/Schoolboy`, `${baseURL}/Column`, `${baseURL}/Rate`]

const getData = async (): Promise<CreateDataProps[]> => {
  const responses = await Promise.all(urls.map((url) => axios.get(url)))
  const data = responses.flatMap((response) => response.data.Items)

  return data
}

export const useSchoolData = () => {
  return useQuery({
    queryKey: ['Schoolboy', 'Column', 'Rate'],
    queryFn: getData,
  })
}
