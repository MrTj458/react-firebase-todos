import React from 'react'
import NoteForm from './NoteForm'
import NoteList from './NoteList'

const Notes = ({ user }) => {
  return (
    <>
      <NoteForm user={user} />
      <NoteList user={user} />
    </>
  )
}

export default Notes
