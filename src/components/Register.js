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
    .then(() => history.push('/todos'))
    .catch(err => {
      setErrors(err.message)
    })
  }

  return (
    <>
      <div className="form-container">
        <h1>Register</h1>
        {errors && <h3 className="error-message">{errors}</h3>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={newUser.email}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={newUser.password}
          />
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            onChange={handleChange}
            value={newUser.password2}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
