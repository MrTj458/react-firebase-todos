import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../utils/firebase'

const Nav = ({ user, history }) => {
  const logout = () => {
    firebase.auth().signOut().then(() => history.push('/'))
  }

  return (
    <nav>
      <Link className="nav-link" to="/">Todo List</Link>
      {user.uid && <Link className="nav-link" to="/notes">My Todos</Link>}
      {user.uid ? <button className="nav-link right" onClick={logout}>Logout</button> : <button className="nav-link right" onClick={() => history.push('/login')}>Login</button>}
      <Link className="nav-link right" to='/notes'>{user.email}</Link>
    </nav>
  )
}

export default withRouter(Nav)
