import React from 'react'
import { Table } from 'react-bootstrap'
import User from './user';

export default function UserList({users}) {
  return(
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country code</th>
        </tr>
      </thead>
      <tbody>
        { users.map((user, index) => (<User user={user} key={index} />))}
      </tbody>
    </Table>
  )
}