import React from 'react'
import { Link } from 'react-router-dom'

const NewUserHome = () => {
 return (
  <div className="home-container">
    <h1>Simple Todo List</h1>
    <h4>
      This is a basic todo list app using React and Firebase
    </h4>
    <p>Want to give it a shot?</p>
    <Link className="home-link" to="/register">
      Register Now!
    </Link>
  </div>
 )
}

export default NewUserHome
