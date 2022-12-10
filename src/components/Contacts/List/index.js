import { useState } from 'react'
import './List-style.css'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())

    )
  })

  return (
    <div className='list-container'>

      <input
        placeholder='Kişi veya numara ara...'
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className='Contact-List'>
        {
          filtered.map((contact, index) => {
            return <li key={index}>
              <span>{contact.name}</span>
              <span>{contact.phone_number}</span>
              </li>
          })
        }
      </ul>
      
      <h3>
        Total ({filtered.length})
      </h3>

    </div>
  )
}

export default List