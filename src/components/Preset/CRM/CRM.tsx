import { useQuery, useMutation, useQueryClient } from 'react-query'
import { Action } from '../../Function/Action/Action'
import Confirm from '../../Function/Confirm/Confirm'
import Card from '../../UI/Card/Card'
import LoaderContent from '../../UI/LoaderContent/LoaderContent'
import Stack from '../../UI/Stack/Stack'
import useAPI from '../../../hooks/useAPI'
import Form from '../../Form/Form/Form'
import Group from '../../UI/Group/Group'
import ModalButton from '../../UI/ModalButton/ModalButton'
import Space from '../../UI/Space/Space'

export function CRM() {
  const { get } = useAPI()
  const queryClient = useQueryClient()

  const loadHirers = async () => {
    return get({
      endpoint: 'hirer?sort_by=name',
    })
  }
  const {
    data: hirers,
    isLoading,
    refetch,
  } = useQuery(['hirer'], loadHirers, {
    staleTime: 1000 * 10,
  })

  const saveHirer = useMutation<any>(
    async (props: any) => {
      return props
    },
    {
      onSuccess: ({ id, responses }: any) => {
        queryClient.setQueriesData(['hirer'], (previous: any) =>
          previous.map((item: any) =>
            item.id === id ? { ...item, ...responses } : item,
          ),
        )
      },
    },
  )

  if (isLoading) {
    return <LoaderContent justContent />
  }

  return (
    <>
      <Group>
        <ModalButton icon="plus" text="Add new">
          <Form formId="hirer" onSave={() => refetch()} />
        </ModalButton>
        <ModalButton icon="file" text="Download CSV"></ModalButton>
      </Group>
      <Space h="sm" />
      <Stack align="stretch" spacing="sm">
        {hirers?.map(({ id, name, ...hirer }: any) => (
          <Card key={id}>
            <Group position="apart" style={{ flexWrap: 'wrap-reverse' }}>
              <div>
                <h5>{name}</h5>
                <h6>{hirer.hirer_type?.name}</h6>
              </div>
              <Group position={'right'} style={{ alignSelf: 'start' }}>
                <ModalButton icon="edit" compact>
                  <Form
                    formId="hirer"
                    itemId={id}
                    onSave={(props: any) => saveHirer.mutate(props)}
                  />
                </ModalButton>
                <Confirm icon="delete" variant="danger" compact>
                  <Action action="delete" endpoint={'hirer/' + id} />
                </Confirm>
              </Group>
            </Group>
          </Card>
        ))}
      </Stack>
    </>
  )
}

export default CRM
