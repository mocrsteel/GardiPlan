import { parseISO, format } from 'date-fns'

type DateProps = {
  dateString: string
}

const Date = ({ dateString }: DateProps) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL do, yyyy')}</time>
}

export default Date