import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { CreateDataProps, SchoolTableProps } from '../../../utils/types'

export const SchoolTable = ({ data }: SchoolTableProps) => {
  const { schoolBoyData, lessonsData, ratesData } = data.Items.reduce(
    (acc, item) => {
      if (item.FirstName || item.SecondName || item.LastName)
        acc.schoolBoyData.push(item)
      if (item.Title && !item.SchoolboyId && !item.ColumnId)
        acc.lessonsData.push(item)
      if (item.Title && item.SchoolboyId && item.ColumnId)
        acc.ratesData.push(item)

      return acc
    },
    {
      schoolBoyData: [] as CreateDataProps[],
      lessonsData: [] as CreateDataProps[],
      ratesData: [] as CreateDataProps[],
    }
  )

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Імʼя учня</TableCell>
            {lessonsData.map((lesson) => (
              <TableCell key={lesson.Id}>{lesson.Title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {schoolBoyData.map((schoolboy) => (
            <TableRow key={schoolboy.Id}>
              <TableCell>
                {schoolboy.FirstName} {schoolboy.SecondName} {''}
                {schoolboy.LastName}
              </TableCell>
              {lessonsData.map((lesson) => {
                const rate = ratesData.find(
                  (rate) =>
                    rate.SchoolboyId === schoolboy.Id &&
                    rate.ColumnId === lesson.Id
                )

                return (
                  <TableCell key={lesson.Id}>
                    {rate ? rate.Title : ''}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
