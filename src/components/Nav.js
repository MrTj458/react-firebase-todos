import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav = ({ user }) => {
  return (
    <nav>
      <Link className="nav-link" to="/">Todo List</Link>
      {user.uid && <Link className="nav-link" to="/notes">My Todos</Link>}
      {user.uid ?
        <Link className="nav-link right" to="/logout">Logout</Link>
        :
        <>
          <Link className="nav-link right" to="/register">Register</Link>
          <Link className="nav-link right" to="/login">Login</Link>
        </>
      }
      <Link className="nav-link right" to='/notes'>{user.email}</Link>
    </nav>
  )
}

export default withRouter(Nav)
