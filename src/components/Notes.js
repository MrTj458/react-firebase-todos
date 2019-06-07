import React from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const Notes = ({ user }) => {
  return (
    <>
      <h1>My Todos</h1>
      <div className="form-container">
        <NoteForm user={user} />
      </div>
      <div className="todos-container">
        <NoteList user={user} />
      </div>
    </>
  )
}

export default Notes
