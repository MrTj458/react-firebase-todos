import React, { useEffect } from 'react'
import firebase from '../utils/firebase'

const Logout = ({ user, history }) => {
  useEffect(() => {
    if (user.uid) {
      firebase.auth().signOut().then(() => history.push('/'))
    }
  }, [history, user.uid])

  return (
    <>
    </>
  )
}

export default Logout
