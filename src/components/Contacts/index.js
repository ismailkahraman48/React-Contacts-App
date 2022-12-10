import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import './Contacts-style.css'

function Contacts() {

  const [contacts, setContacts] = useState(
    [
      {
        name: "ismail Kahraman",
        phone_number: "123456789"
      },
      {
        name : "Cem Yılmaz",
        phone_number : "0981241"
      }
    ]
  )

  useEffect(() => { // Form componentinden addContact ile contacts e atama yapıldığında çalışacak
    console.log(contacts)

  }, [contacts])


  return (

    <div className="contacts-container">
      <h2>Contacts</h2>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>


  )
}

export default Contacts
