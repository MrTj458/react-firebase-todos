import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Notes from './Notes'

function App() {
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
