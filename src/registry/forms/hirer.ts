const form = {
  id: 'a0501ec6-2de7-4553-9ffa-af4626e3773a',
  name: 'Hirer form',
  reference: 'hirer',
  description: 'Hirer form',
  endpoint: 'hirer',
  questions: [
    {
      reference: '',
      component: 'FormHeading',
      props: { text: 'Profile' },
      form_props: { questionWidth: 12 },
    },
    {
      text: 'Name of group or organisation',
      reference: 'name',
      component: 'Input',
      form_props: { required: true },
    },
    {
      id: '3620ae37-0bc9-43b4-9da2-28e731bfc3cc',
      component: 'HasPermission',
      props: { permission: 'admin' },
    },
    {
      parent_id: '3620ae37-0bc9-43b4-9da2-28e731bfc3cc',
      text: 'Customer type',
      reference: 'customer_type_id',
      component: 'Select',
      props: { endpoint: 'd/customer-type' },
    },
    {
      id: '4dedbd7e-b54d-49df-8e54-1952a62f2f09',
      component: 'HasPermission',
      props: { permission: 'admin' },
    },
    {
      parent_id: '4dedbd7e-b54d-49df-8e54-1952a62f2f09',
      text: 'Booking type',
      reference: 'hirer_type_id',
      component: 'Checkboxes',
      props: { endpoint: 'd/hirer-type' },
    },
    {
      id: 'ea6bf048-49ff-48dc-afaf-675163969ff6',
      component: 'HasPermission',
      props: { permission: 'admin' },
    },
    {
      parent_id: 'ea6bf048-49ff-48dc-afaf-675163969ff6',
      text: 'Local hirer',
      reference: 'local',
      component: 'Checkbox',
    },
    {
      parent_id: 'ea6bf048-49ff-48dc-afaf-675163969ff6',
      text: 'Account number',
      reference: 'account_no',
      component: 'Input',
    },
    {
      id: '1b162b31-1a99-4a4f-92c7-70931802f66a',
      component: 'HasPermission',
      props: { permission: 'admin' },
    },
    {
      parent_id: '1b162b31-1a99-4a4f-92c7-70931802f66a',
      text: 'High risk hirer',
      reference: 'high_risk',
      component: 'Switch',
    },
    {
      id: '1857e010-1f59-483e-969e-4037e07f69a1',
      component: 'HasPermission',
      props: { permission: 'admin' },
      form_props: {
        conditions: [{ on: 'id', type: 'empty' }],
      },
    },
    {
      parent_id: '1857e010-1f59-483e-969e-4037e07f69a1',
      props: { text: 'Contact' },
      reference: '',
      component: 'FormHeading',
      form_props: { questionWidth: 12 },
    },
    {
      parent_id: '1857e010-1f59-483e-969e-4037e07f69a1',
      text: 'Contact',
      reference: 'user_id',
      component: 'UserSelector',
      props: {
        filters: ['role_id=[4,5]'],
        formId: 'hirer-user',
        defaultValues: { role_id: '4' },
      },
    },
    // {
    //   text: 'Change log',
    //   reference: '',
    //   component: 'ChangeLog',
    //   props: { itemId: '{form.id}' },
    //   form_props: { questionWidth: 12, answerWidth: 12 },
    // },
    {
      id: '05d2f963-5806-4192-ad2a-4831e06b27a1',
      component: 'HasPermission',
      props: { permission: 'admin' },
    },
    {
      parent_id: '05d2f963-5806-4192-ad2a-4831e06b27a1',
      component: 'FormHeading',
      props: { text: 'Notes' },
      form_props: { questionWidth: 12 },
    },
    {
      id: 'c21d7c5b-9513-402d-a60f-4860416de4b3',
      component: 'HasPermission',
      props: { permission: 'admin' },
    },
    {
      parent_id: 'c21d7c5b-9513-402d-a60f-4860416de4b3',
      text: 'Notes',
      reference: 'club_notes',
      component: 'Textarea',
      form_props: { questionWidth: 0, answerWidth: 12 },
    },
  ],
}

export default form
