import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav = ({ user }) => {
  return (
    <nav>
      <Link className="nav-link" to="/">Todo List</Link>
      {user.uid ?
        <>
          <Link className="nav-link right" to="/logout">Logout</Link>
          <Link className="nav-link right" to='/todos'>My Todos</Link>
        </>
        :
        <>
          <Link className="nav-link right" to="/register">Register</Link>
          <Link className="nav-link right" to="/login">Login</Link>
        </>
      }
    </nav>
  )
}

export default withRouter(Nav)
