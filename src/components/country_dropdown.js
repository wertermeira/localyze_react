import * as React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'


const contries = [
  { name: 'Brazil', code: 'BR' },
  { name: 'United States of America', code: 'US' },
  { name: 'Germany', code: 'DE' }
]
export default function CountryDropDown({changeList}) {

  return(
    <DropdownButton className="mb-md-3" title="Select Country">
      { contries.map( (country, index) => ( <Dropdown.Item onClick={() => changeList(country.code)} key={index} >{country.name}</Dropdown.Item> )) }
    </DropdownButton>
  )
}