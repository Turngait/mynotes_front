import React from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.scss'
import Index from './pages/Index/Index'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <>
    <Switch>
      <Route path='/' exact component={Index}/>
      <Route path='/dashboard' exact component={Dashboard} />
    </Switch>
    </>
  )
}

export default App
