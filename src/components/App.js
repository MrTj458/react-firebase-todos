import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import firebase from '../utils/firebase'

import Nav from './Nav'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'
import Notes from './Notes'

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
    })
  }, [])

  return (
    <>
      <Nav user={user} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" render={(props) => <Logout {...props} user={user} />} />
        <Route exact path="/notes" render={(props) => <Notes {...props} user={user} />} />
      </Switch>
    </>
  );
}

export default App;
