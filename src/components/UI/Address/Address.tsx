import React from 'react'

interface IAddress {
  address?: string
  suburb?: string
  state?: string
  postcode?: string
}

function Address({ address, suburb, state, postcode }: IAddress) {
  const formatted = [
    [address, suburb].filter((v: any) => v && v !== '').join(', '),
    state,
    postcode,
  ].join(' ')

  return <>{formatted}</>
}

export default Address
