import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import firebase from '../utils/firebase'

import Nav from './Nav'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Notes from './Notes'

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user)
      } else {
        console.log('No User');
      }
    })
  }, [])

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/notes" component={Notes} />
      </Switch>
    </>
  );
}

export default App;
