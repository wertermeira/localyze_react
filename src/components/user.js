import React from 'react'
export default function User({
  user
}) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{ user.country_code}</td>
    </tr>
  )
}