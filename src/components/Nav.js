import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../utils/firebase'

const Nav = ({ user, history }) => {
  const logout = () => {
    firebase.auth().signOut().then(() => history.push('/'))
  }

  return (
    <>
      <h1>
        Todo List
      </h1>
      <p>{user.email}</p>
      {user.uid && <button onClick={logout}>Logout</button>}
    </>
  )
}

export default withRouter(Nav)
