import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import CountryDropdown from './components/country_dropdown'
import UserList from './components/user_list'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const user_list = [
    { name: 'User A', country_code: 'BR'},
    { name: 'User B', country_code: 'BR'},
    { name: 'User C', country_code: 'US'},
    { name: 'User D', country_code: 'DE'},
    { name: 'User F', country_code: 'DE'},
  ]
  const [filteredUser, setFilteredUser] = useState(user_list)
  function changeList(country_code) {
    setFilteredUser(user_list.filter(user => user.country_code === country_code))
  }

  return (
    <div className="App">
      <Container className='mt-md-5'>
        <CountryDropdown changeList={changeList} />
        <UserList users={filteredUser} />
      </Container>
    </div>
  );
}

export default App;