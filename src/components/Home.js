import React from 'react'
import NewUserHome from './NewUserHome'
import LoggedInHome from './LoggedInHome'

const Home = ({ user }) => {
  return (
    <>
      {user.uid ?
        <LoggedInHome />
        :
        <NewUserHome />
      }
    </>
  )
}

export default Home
