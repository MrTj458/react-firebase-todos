import React from 'react'
import { Link } from 'react-router-dom'

const LoggedInHome = () => {
  return (
    <div className="home-container">
      <h1>Welcome Back to Simple Todo List</h1>
      <Link className="home-link" to="/todos">
        View Todos
      </Link>
    </div>
  )
}

export default LoggedInHome
