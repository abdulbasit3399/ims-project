const page = {
  id: '4ec12b14-64a3-11ed-9022-0242ac120002',
  path: 'crm',
  name: 'CRM',
  icon: 'users',
  components: [
    {
      component: 'DataGrid',
      endpoint: 'hirer?fields=id,name,customer_type',
      columns: [
        { name: 'Name', key: '{name}', feature: true },
        { name: 'Booking type', key: '{e::hirer_type.name}', badge: true },
        {
          name: 'Customer type',
          key: '{e::customer_type.name}',
          badge: true,
        },
        {
          name: 'Club contact',
          key: '{user.name}',
          title: true,
        },
        {
          name: 'Actions',
          key: 'action',
          sub: [
            {
              component: 'Group',
              sub: [
                {
                  component: 'ModalButtonForm',
                  compact: true,
                  icon: 'edit',
                  size: 'lg',
                  tooltip: 'Edit',
                  formId: 'hirer',
                  itemId: '{id}',
                },
                {
                  component: 'Confirm',
                  title: 'Are you sure you want to delete this hirer?',
                  tooltip: 'Delete',
                  variant: 'danger',
                  light: true,
                  compact: true,
                  icon: 'delete',
                  sub: [
                    {
                      component: 'Action',
                      action: 'delete',
                      props: { endpoint: 'hirer/{id}' },
                    },
                  ],
                },
                {
                  component: 'ModalButtonForm',
                  compact: true,
                  icon: 'file',
                  tooltip: 'View documents',
                  size: 'lg',
                  light: true,
                  formId: 'compliance-docs',
                  specific_id: '{id}',
                  item_specific_id: '{id}',
                },
                {
                  component: 'ActionMenu',
                  tooltip: 'More actions',
                  actions: [
                    {
                      text: 'Linked venues',
                      modal: true,
                      icon: 'Building',
                      sub: [{ component: 'HirerLinkAsset', id: '{id}' }],
                    },
                    {
                      text: 'Linked contacts',
                      modal: true,
                      icon: 'users',
                      sub: [{ component: 'HirerLinkUser', id: '{id}' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // {
        //   group: true,
        //   name: 'View Hirer details',
        //   sub: [
        //     {
        //       component: 'Group',
        //       sub: [
        //         {
        //           component: 'ModalButtonForm',
        //           text: 'View hirer details',
        //           icon: 'search',
        //           size: 'lg',
        //           tooltip: 'View hirer details',
        //           compact: true,
        //           formId: 'hirer_details',
        //           itemId: '{id}',
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      sorting: [
        {
          name: 'Name (A-Z)',
          key: 'name,asc',
        },
        {
          name: 'Name (Z-A)',
          key: 'name,desc',
        },
        {
          name: 'Customer type (A-Z)',
          key: 'customer_type.name',
        },
        {
          name: 'Customer type (Z-A)',
          key: 'customer_type.name,desc',
        },
      ],
      titleSub: [
        {
          component: 'Group',
          sub: [
            {
              component: 'ModalButtonForm',
              icon: 'plus',
              text: 'Add new',
              formId: 'hirer',
              itemId: 'new',
            },
            {
              component: 'Csv',
              props: {
                endpoint: 'hirer?sort_by=name',
                columns: [
                  { name: 'Name', key: '{name}' },
                  { name: 'Booking type', key: '{e::hirer_type.name}' },
                  { name: 'Customer type', key: '{e::customer_type.name}' },
                  { name: 'Contact name', key: '{user.name}' },
                ],
              },
              sub: [
                {
                  component: 'Button',
                  inMenu: true,
                  icon: 'file',
                  text: 'Download hirer CSV',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  show: 2,
  order: 8,
  category: 'crm',
  module: 'crm',
  permission: 'dashboard',
}

export default page
