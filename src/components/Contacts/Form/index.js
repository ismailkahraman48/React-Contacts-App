import { useState, useEffect } from 'react'
import './form-style.css'

const initialFormValues = { name: "", phone_number: "" }; // Form inputları başlangıç değerleri

function Form({ addContact, contacts }) {

  useEffect(() => {
    setForm(initialFormValues) // form submit edildiğinde contacts a veri gönderildiğinde inputların içerisi temizlenir.

  }, [contacts])

  const [form, setForm] = useState({ name: "", phone_number: "" })

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.name === "" || form.phone_number === "") {
      return false
    }

    addContact([...contacts, form])
    // console.log(form)

  }



  return (

    <form onSubmit={handleSubmit} className="form-container">



      <input
        value={form.name}
        className='name-input'
        name='name'
        placeholder='Full Name..'
        onChange={onChangeInput}
      />


      <input
        value={form.phone_number}
        lassName='phone-input'
        name='phone_number'
        placeholder='Phone Number'
        onChange={onChangeInput}
      />

      <div className='btn-container'>
        <button className='btn'>Add</button>
      </div>



    </form>



  )
}

export default Form