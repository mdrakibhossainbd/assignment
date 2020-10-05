import React, { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import Events from './components/Events/Events';
import AddEvent from './components/AddEvent/AddEvent';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: '',
    name: ''
  });
  return (
    
    <div className="container" >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <PrivateRoute path="/register">
              <Register />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/event/:eventName">
              <Register />
            </PrivateRoute>
            <PrivateRoute path="/events">
              <Events />
            </PrivateRoute>
            <Route path="/create">  
              <AddEvent />
            </Route>
            <Route path="*">
              
            
              <h2 >Page Not Found 404</h2>
              
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
   
  );
}

export default App;
