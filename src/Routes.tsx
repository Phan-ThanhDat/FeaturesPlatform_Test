import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import CountryDetail from './pages/CountryDetail'

const Routes = () => (
  <Switch>
    <Route exact path="/countries" component={Home} />
    <Route exact path="/countries/:id" component={CountryDetail} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect exact from="/" to="/countries" />
    <Redirect from="/" to="/not-found" />
  </Switch>
)

export default Routes
