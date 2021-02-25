import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import Index from './pages/Index/Index';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Policy from './pages/Policy/Policy';
import Recovery from './pages/Recovery/Recovery';
import NewPass from './pages/Recovery/NewPass/NewPass';

function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={Index}/>
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/policy' exact component={Policy} />
      <Route path='/recovery' exact component={Recovery} />
      <Route path='/setnewpass/:email/:hash' exact component={NewPass} />
      <Route path='/contacts' exact component={Index} />
    </Switch>
    </>
  )
}

export default App;
