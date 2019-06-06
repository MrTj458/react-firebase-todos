import React, { useState } from 'react'
import firebase from '../utils/firebase'

const Register = ({ history }) => {
  const [newUser, setNewUser] = useState({email: '', password: '', password2: ''})
  const [errors, setErrors] = useState()

  const handleChange = (e) => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email, password, password2} = newUser
    if (password !== password2) {
      setErrors('Passwords must match.')
      return
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => history.push('/'))
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
        <input
          type="password"
          name="password2"
          placeholder="confirm password"
          onChange={handleChange}
          value={newUser.password2}
        />
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default Register
