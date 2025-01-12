export interface CreateDataProps {
  Id: number
  FirstName?: string
  SecondName?: string
  LastName?: string
  Title?: string
  SchoolboyId?: number
  ColumnId?: number
}

export interface SchoolTableProps {
  data: { Items: CreateDataProps[] }
}
