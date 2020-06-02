import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Login, Register } from './components/auth';
import Dashboard from './components/main/Dashboard/Dashboard';

import { AuthProvider } from './Auth';
import PrivateRoute from './wrappers/PrivateRoute';
 
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App;