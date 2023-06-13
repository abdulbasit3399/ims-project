import { isEmpty } from 'src/utilities/strings'
import Badge from '../Badge/Badge'

const ItemStatus = ({
  row: { completed, approved, rejected, declined },
  prefix = 'Status: ',
}: any) => {
  const getStatus = () => {
    if (typeof approved !== 'undefined' && !isEmpty(approved)) {
      return ['Approved', 'green']
    }

    if (typeof declined !== 'undefined' && !isEmpty(declined)) {
      return ['Declined', 'red']
    }

    if (typeof rejected !== 'undefined' && !isEmpty(rejected)) {
      return ['Rejected', 'red']
    }

    if (typeof completed !== 'undefined' && !isEmpty(completed)) {
      return ['Awaiting approval', 'cyan']
    }

    return ['In progress', 'yellow']
  }

  const [status, statusBg] = getStatus()

  return (
    <Badge color={statusBg}>
      {prefix}
      {status}
    </Badge>
  )
}

export default ItemStatus
