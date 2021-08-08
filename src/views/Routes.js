// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Dashboard from './dashboard/Dashboard'
import SignUp from './account/SignUp'
import Error from './misc/Error'

const Routes = () => (
  <Switch>
    <Route exact path="/" component= {() => { return <h1>Home</h1> }}/>

    <Route path="/dashboard" component= {Dashboard}/>

    <Route path="/signup" component={SignUp}/>
    <Route path="/login" component={() => { return <h1>Login</h1> }}/>

    <Route component={Error} />
  </Switch>
)

export default Routes
