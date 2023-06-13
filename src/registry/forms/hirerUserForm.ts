const form = {
  id: '191526e0-51f7-4251-a785-4e455309d9ca',
  name: 'User form',
  reference: 'hirer-user',
  workflow: ['validate.email'],
  description: 'User details form',
  endpoint: 'user',
  questions: [
    // {
    //   text: 'Role',
    //   reference: 'role_id',
    //   component: 'Select',
    //   props: { endpoint: 'role' },
    // },
    {
      text: 'First name',
      reference: 'first_name',
      component: 'Input',
      form_props: { required: true },
    },
    { text: 'Last name', reference: 'last_name', component: 'Input' },
    { text: 'Phone number', reference: 'phone', component: 'Input' },
    {
      text: 'Email address',
      reference: 'email',
      component: 'Input',
      form_props: { required: true },
    },
    { text: 'Password', reference: 'password', component: 'InputPassword' },
  ],
}

export default form
