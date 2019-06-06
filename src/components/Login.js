import React, { useState } from 'react'
import firebase from '../utils/firebase'

const Login = ({ history }) => {
  const [newUser, setNewUser] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState()

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email, password} = newUser
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => history.push('/notes'))
    .catch(err => {
      setErrors(err.message)
    })
  }

  return (
    <>
      {errors && <h3>{errors}</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          value={newUser.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={newUser.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
