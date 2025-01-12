import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CreateDataProps } from '../utils/types'

const urls = [
  'http://94.131.246.109:5555/v1/2/Schoolboy',
  'http://94.131.246.109:5555/v1/2/Column',
  'http://94.131.246.109:5555/v1/2/Rate',
]

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
