import React from 'react'
import { Card, Flex, Group, Stack, Table, Text, Title } from '@mantine/core'
import Button from 'src/components/Form/Button/Button'
import Icon from 'src/components/UI/Icon/Icon'

const HirerDetails = () => {
  return (
    <Stack>
      <Flex>
        <Flex style={{ flex: 1 }}>
          <Button text="Back" icon="back" />
        </Flex>
        <Flex style={{ flex: 1 }} gap="sm" justify="flex-end">
          <Button icon="phone" text="Communication" />
          <Button icon="file" text="Documents" />
          <Button icon="edit" text="Edit" />
        </Flex>
      </Flex>
      <Flex>
        <Flex direction="column">
          <Title weight={400}>TSS High School</Title>
          <Flex align="center" gap="sm">
            <Icon type="map" color="gray" />
            <Text color="gray">2 Winchester St, Southport QLD 4215</Text>
            <Button icon="map" compact />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Flex style={{ flex: 1 }} gap={'lg'}>
          <Flex style={{ flex: 1 }}>
            <Card
              style={{ flex: 1 }}
              shadow="sm"
              padding="xs"
              radius="lg"
              withBorder
            >
              <Card.Section p="xs">
                <Title weight={400} order={3}>
                  Keys
                </Title>
              </Card.Section>

              <Group position="apart" mb="xs">
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Venue</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </Group>
              <Group position="apart" mt="5rem" mb="xs">
                <Flex style={{ flex: 1 }} justify="flex-end" align={'flex-end'}>
                  <Button icon="plus" text={'Add'} />
                </Flex>
              </Group>
            </Card>
          </Flex>
          <Flex style={{ flex: 1 }}>
            <Card
              style={{ flex: 1 }}
              shadow="sm"
              padding="xs"
              radius="lg"
              withBorder
            >
              <Card.Section p="xs">
                <Title weight={400} order={3}>
                  Equipment
                </Title>
              </Card.Section>

              <Group position="apart" mb="xs">
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Venue</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </Group>
              <Group position="apart" mt="5rem" mb="xs">
                <Flex style={{ flex: 1 }} justify="flex-end" align={'flex-end'}>
                  <Button icon="plus" text={'Add'} />
                </Flex>
              </Group>
            </Card>
          </Flex>
          <Flex style={{ flex: 1 }}>
            <Card
              style={{ flex: 1 }}
              shadow="sm"
              padding="xs"
              radius="lg"
              withBorder
            >
              <Card.Section p="xs">
                <Title weight={400} order={3}>
                  Storage
                </Title>
              </Card.Section>

              <Group position="apart" mb="xs">
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Venue</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </Table>
              </Group>
              <Group position="apart" mt="5rem" mb="xs">
                <Flex style={{ flex: 1 }} justify="flex-end" align={'flex-end'}>
                  <Button icon="plus" text={'Add'} />
                </Flex>
              </Group>
            </Card>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Card
          style={{ flex: 1 }}
          shadow="sm"
          padding="xs"
          radius="lg"
          withBorder
        >
          <Card.Section p="xs">
            <Title weight={400} order={3}>
              Assigned Venues
            </Title>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Venue</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Group>
          <Group position="apart" mt="5rem" mb="xs">
            <Flex style={{ flex: 1 }} justify="flex-end" align={'flex-end'}>
              <Button icon="plus" text={'Add'} />
            </Flex>
          </Group>
        </Card>
      </Flex>
      <Flex>
        <Card
          style={{ flex: 1 }}
          shadow="sm"
          padding="xs"
          radius="lg"
          withBorder
        >
          <Card.Section p="xs">
            <Title weight={400} order={3}>
              Upcoming Bookings
            </Title>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Hirer</th>
                  <th>Invoices</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Group>
          <Group position="apart" mt="5rem" mb="xs">
            <Flex style={{ flex: 1 }} justify="flex-end" align={'flex-end'}>
              <Button icon="plus" text={'Add'} />
            </Flex>
          </Group>
        </Card>
      </Flex>
      <Flex>
        <Card
          style={{ flex: 1 }}
          shadow="sm"
          padding="xs"
          radius="lg"
          withBorder
        >
          <Card.Section p="xs">
            <Title weight={400} order={3}>
              Previous Bookings
            </Title>
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Hirer</th>
                  <th>Invoices</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Group>
          <Group position="apart" mt="5rem" mb="xs">
            <Flex style={{ flex: 1 }} justify="flex-end" align={'flex-end'}>
              <Button icon="plus" text={'Add'} />
            </Flex>
          </Group>
        </Card>
      </Flex>
    </Stack>
  )
}

export default HirerDetails
