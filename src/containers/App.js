import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DashboardPage from  './DashboardPage';
import LoginPage from  './LoginPage'
import   '../App.css'
import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Switch>
    
    <PrivateRoute exact path='/' component={DashboardPage}/>
    <Route exact path='/auth' component={LoginPage}/>
     
  </Switch>
   </BrowserRouter>
  );
}

export default App;
