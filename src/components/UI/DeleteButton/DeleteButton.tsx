import React from 'react'
import Action from 'src/components/Function/Action/Action'
import Confirm from 'src/components/Function/Confirm/Confirm'

function DeleteButton({ id, row, endpoint, compact }: any) {
  if (typeof endpoint === 'undefined') {
    endpoint = 'd/' + (row?.row?.id ?? row?.id ?? id)
  }

  return (
    <Confirm
      title="Are you sure you want to delete this?"
      tooltip="Delete"
      variant="danger"
      light
      compact={compact}
      icon="Delete"
    >
      <Action action="delete" endpoint={endpoint} />
    </Confirm>
  )
}

export default DeleteButton
