import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Index from './pages/Index/Index';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Policy from './pages/Policy/Policy';

function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={Index}/>
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/policy' exact component={Policy} />
    </Switch>
    </>
  )
}

export default App
