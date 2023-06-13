import { Table as TableUI } from '@mantine/core'
import { useQuery } from 'react-query'
import useAPI from '../../../hooks/useAPI'
import Group from '../Group/Group'
import Skeleton from '../Skeleton/Skeleton'
import FormatDate from 'src/components/Function/FormatDate/FormatDate'
import ModalButtonForm from '../ModalButtonForm/ModalButtonForm'
import Confirm from 'src/components/Function/Confirm/Confirm'
import Action from 'src/components/Function/Action/Action'

interface ISimpleList {
  endpoint?: string
  formId?: string
  assetId?: string
  columnList?: []
}

let tableColumns = [{ label: 'Name', value: 'name' }]

function SimpleList({ endpoint, formId, assetId, columnList }: ISimpleList) {
  const { get } = useAPI()

  if (typeof columnList !== 'undefined' && columnList.length) {
    tableColumns = [...columnList]
  }

  const { data: hirers, isLoading: hirersLoading } = useQuery({
    queryKey: ['hirers'],
    queryFn: async () =>
      await get({
        endpoint: `hirer`,
      }),
  })

  const { data: hirerkeys, isLoading: hirerkeysLoading } = useQuery({
    queryKey: ['hirer-key'],
    queryFn: async () =>
      await get({
        endpoint: `hirer-key`,
      }),
  })

  const {
    data: items,
    isLoading: loading,
    refetch,
  } = useQuery(
    ['simplelist', formId, assetId],
    async () => await get({ endpoint }),
  )

  const cols = tableColumns.map((col: any) => {
    return <th>{col.label}</th>
  })
  const loadingCols = tableColumns.map((col: any) => {
    return (
      <td>
        <Skeleton
          width={'100%'}
          style={{ maxWidth: '100%' }}
          height={40}
          mb={5}
        />
      </td>
    )
  })

  const rows =
    items &&
    items?.map((item: any) => {
      const matchHirer = hirerkeys?.find(
        (f: any) => f['key-register_id'] === item.id,
      )

      const hirerName = hirers
        ?.filter((f: any) => f.id === matchHirer?.hirer_id)
        .map((n: any) => n.name)

      const cells = tableColumns.map((col: any) => {
        let value = col.value === 'hirer_id' ? hirerName : item?.[col.value]
        if (typeof col?.type !== 'undefined' && col?.type === 'date') {
          value = <FormatDate date={value} />
        }
        return <td>{value}</td>
      })
      return (
        <tr key={item.id ?? item.name ?? item.title}>
          {cells}
          <td>
            <Group position="right">
              <ModalButtonForm
                compact
                icon="user"
                tooltip="Assign/unassign hirer"
                formId="hirer-key"
                itemId={item.id}
                query={{ 'key-register_id': item.id }}
                defaultValues={{ 'key-register_id': item.id }}
              />
              <ModalButtonForm
                icon="edit"
                compact
                key={item.id}
                formId={formId ?? 'key-register'}
                itemId={item.id}
                onSave={refetch}
              />
              <Confirm
                icon="delete"
                variant="danger"
                title="Are you sure you want to delete this key?"
                compactX
                tooltip="Delete key"
              >
                <Action
                  action="delete"
                  endpoint={'d/' + item.id}
                  after={refetch}
                />
              </Confirm>
            </Group>
          </td>
        </tr>
      )
    })

  return (
    <TableUI highlightOnHover={true}>
      <thead>
        <tr>
          {cols}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {!loading && !hirersLoading && !hirerkeysLoading && rows}
        {loading && hirersLoading && hirerkeysLoading && (
          <tr>
            {loadingCols}
            <td>
              <Skeleton
                width={'100%'}
                style={{ maxWidth: '100%' }}
                height={40}
                mb={5}
              />
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={tableColumns.length + 1}>
            <Group position="right">
              <ModalButtonForm
                text="Add"
                icon="plus"
                formId={formId}
                defaultValues={{ asset_id: assetId }}
                onSave={refetch}
              />
            </Group>
          </td>
        </tr>
      </tfoot>
    </TableUI>
  )
}

export default SimpleList
