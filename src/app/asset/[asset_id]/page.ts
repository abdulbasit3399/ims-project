const page = {
  id: 'a16e2823-e2b6-4419-b49a-9628c0762405',
  path: 'asset/:asset_id',
  name: 'Venue details',
  icon: 'building',
  components: [
    {
      component: 'Group',
      position: 'apart',
      sub: [
        {
          component: 'Button',
          text: 'Back',
          icon: 'back',
          link: '/admin/asset-management',
        },
        {
          component: 'Group',
          sub: [
            {
              component: 'Button',
              text: 'Venue questions',
              icon: 'Question',
              link: '/asset/{asset_id}/questions',
            },
            {
              component: 'ModalButtonForm',
              icon: 'edit',
              size: 'xl',
              formId: 'asset',
              itemId: '{asset_id}',
            },
          ],
        },
      ],
    },
    {
      component: 'Details',
      endpoint: 'asset/{asset_id}',
      sub: [
        {
          component: 'Heading',
          text: '{name}',
          size: 'h2',
        },
        {
          component: 'Conditional',
          on: '{address}',
          type: '!empty',
          sub: [
            {
              component: 'Group',
              sub: [
                {
                  component: 'Icon',
                  type: 'map',
                },

                {
                  component: 'Heading',
                  text: 'Address: ',
                  size: 'h6',
                  sub: [
                    {
                      component: 'Address',
                      props: {
                        address: '{address}',
                        suburb: '{suburb}',
                        state: '{state}',
                        postcode: '{postcode}',
                      },
                    },
                  ],
                },
                {
                  component: 'ModalButton',
                  icon: 'map',
                  compact: true,
                  sub: [
                    {
                      component: 'Map',
                      address: '{address} {suburb} {state}',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          component: 'Conditional',
          on: '{photo}',
          type: '!empty',
          sub: [
            {
              component: 'Image',
              radius: 'sm',
              height: '200',
              src: '{photo || photo.value}',
            },
          ],
        },
        {
          component: 'Space',
          h: 'sm',
        },
        {
          component: 'SimpleGrid',
          grow: 'true',
          align: 'start',
          sub: [
            {
              component: 'Card',
              sub: [
                {
                  component: 'Heading',
                  text: 'Keys',
                },
                {
                  component: 'SimpleList',
                  props: {
                    endpoint: 'key-register?asset_id={asset_id}',
                    formId: 'key-register',
                    assetId: '{asset_id}',
                    columnList: [
                      { label: 'Name', value: 'name' },
                      { label: 'Hirer', value: 'hirer_id' },
                    ],
                  },
                },
              ],
            },
            {
              component: 'Card',
              sub: [
                {
                  component: 'Heading',
                  text: 'Equipment',
                },
                {
                  component: 'SimpleList',
                  props: {
                    endpoint: 'equipment-list?asset_id={asset_id}',
                    formId: 'equipment',
                    assetId: '{asset_id}',
                    columnList: [
                      { label: 'Name', value: 'name' },
                      { label: 'Hirer', value: 'hirer_id' },
                    ],
                  },
                },
              ],
            },
            {
              component: 'Card',
              sub: [
                {
                  component: 'Heading',
                  text: 'Storage',
                },
                {
                  component: 'SimpleList',
                  props: {
                    endpoint: 'storage-list?asset_id={asset_id}',
                    formId: 'storage',
                    assetId: '{asset_id}',
                    columnList: [
                      { label: 'Name', value: 'name' },
                      { label: 'Hirer', value: 'hirer_id' },
                    ],
                  },
                },
              ],
            },
          ],
        },

        {
          component: 'Space',
          h: 'sm',
        },
      ],
    },
    {
      component: 'Card',
      sub: [
        {
          component: 'Heading',
          text: 'Recent bookings',
        },
        {
          component: 'DataGrid',
          endpoint: 'asset-booking/{asset_id}',
          columns: [
            {
              name: 'Booking list',
              sub: [
                {
                  component: 'Stack',
                  sub: [
                    {
                      component: 'BookingListAdmin',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // {
        //   component: 'SimpleList',
        //   props: {
        //     endpoint: 'booking?withParent&asset_id={asset_id}',
        //     formId: 'casual-booking',
        //     assetId: '{asset_id}',
        //     columnList: [
        //       { label: 'Application ID', value: 'application_id' },
        //       { label: 'Hirer', value: 'parent' },
        //     ],
        //   },
        // },
      ],
    },
  ],
  show: 0,
  order: 6,
  // category: 'crm',
  // module: 'crm',
  // permission: 'dashboard',
}

export default page
