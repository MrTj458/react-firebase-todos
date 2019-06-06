import React, { useState } from 'react'
import firebase from '../utils/firebase'

const NoteForm = ({ user }) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length > 0 && user.uid) {
      firebase.firestore().collection('todos').add({
        text,
        uid: user.uid
      })
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default NoteForm
