import { SchoolTable } from './ui/components/SchoolTable/SchoolTable'
import { useSchoolData } from './hooks/useSchoolData'

export const App = () => {
  const { data, isLoading, isError } = useSchoolData()

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error: Failed to load data</div>

  return (
    <>
      <SchoolTable data={{ Items: data }} />
    </>
  )
}
