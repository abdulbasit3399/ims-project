import { Table } from '@mantine/core'
import { useQuery } from 'react-query'
import Group from 'src/components/UI/Group/Group'
import ModalButtonForm from 'src/components/UI/ModalButtonForm/ModalButtonForm'
import { get, post } from 'src/hooks/useAPI'
import FeeItem from './FeeItem'
import Button from 'src/components/Form/Button/Button'

function calculateTotal(rate: number, unit: number) {
  return Number(rate) * Number(unit)
}

function calculateUsageHours(item: any) {
  const start = new Date(item.date + ' ' + item.start)
  const end = new Date(item.date + ' ' + item.end)

  return diffHours(end, start)
}

function diffHours(dt2: Date, dt1: Date) {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000
  diff /= 60 * 60
  return Math.abs(+diff.toFixed(2))
}

function Fees({ id, usage, hirer }: any) {
  let grandTotal = 0

  const assetIds = usage?.map((item: any) => item.asset_id)
  const loaded = Array.isArray(usage)

  const { data: rates } = useQuery({
    queryKey: ['rates', id],
    queryFn: async () => post({ endpoint: 'pricing', data: { ids: assetIds } }),
    enabled: loaded,
  })

  const { data: fees, refetch } = useQuery({
    queryKey: ['fees', 'booking', id],
    queryFn: async () => await get({ endpoint: 'fee?booking_id=' + id }),
  })

  const generateFees = async () => {
    let feesToSend: object[] = []
    let bondsAdded: string[] = []
    usage?.forEach((item: any) => {
      const rate =
        rates[item.asset_id]?.[`${hirer?.customer_type_id}.rate`]?.price ?? 0
      const bond =
        rates[item.asset_id]?.[`${hirer?.customer_type_id}.bond`]?.price ?? 0
      const unit = calculateUsageHours(item)
      const total = calculateTotal(rate, unit)

      feesToSend.push({
        endpoint: 'fee',
        data: {
          booking_id: id,
          hirer_id: hirer?.id,
          asset_id: item.asset_id,
          usage_id: item.id,
          name: [item.asset?.parent?.name, item.asset?.name]
            .filter((item: any) => item !== '')
            .join(' - '),
          start: item.date + ' ' + item.start,
          end: item.date + ' ' + item.end,
          rate,
          unit,
          total,
        },
      })

      if (bond && bond !== 0 && !bondsAdded.includes(item.asset_id)) {
        bondsAdded.push(item.asset_id)
        feesToSend.push({
          endpoint: 'fee',
          data: {
            booking_id: id,
            hirer_id: hirer?.id,
            asset_id: item.asset_id,
            usage_id: item.id,
            name: [item.asset?.parent?.name, item.asset?.name, 'Bond']
              .filter((item: any) => item !== '')
              .join(' - '),
            rate: bond,
            unit: 1,
            total: calculateTotal(bond, 1),
          },
        })
      }
    })

    await Promise.all(
      feesToSend?.map(
        (item: any) =>
          new Promise((resolve) => post(item).then(() => resolve(true))),
      ),
    )
    void refetch()
  }

  return (
    <>
      <Table striped withBorder>
        <thead>
          <tr>
            <th>Venue</th>
            <th>Rate</th>
            <th>Hours/Units</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {typeof fees?.map !== 'undefined' &&
            fees.map((item: any) => {
              grandTotal += Number(item.total)
              return <FeeItem refetch={refetch} key={item.id} item={item} />
            })}
          <tr>
            <td align="right" colSpan={3}>
              <strong>Total to be paid:</strong>
            </td>
            <td>${grandTotal}</td>
          </tr>
        </tbody>
      </Table>
      <Group position="right">
        <Button
          text="Generate fees from bookings"
          onClick={generateFees}
          icon="Dollar"
        />
        <ModalButtonForm
          formId="fee"
          itemId="new"
          icon="Plus"
          text="Add fee to booking"
          defaultValues={{ booking_id: id }}
          onSave={refetch}
        />
      </Group>
    </>
  )
}

export default Fees
