import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendList'
import AddFriend from './components/AddFriend'
import Header from './components/Header'


const App = () => {

  const token=localStorage.getItem("token")

 
  return (
    <div className='App'>
    <Router>
   <Header />
      <Switch>

          <Route path="/" exact>
            <LoginForm />
          </Route>

          <Route path="/login" exact>
          <LoginForm />
          </Route>

          <Route path="/friends" exact>
            <FriendsList />
          </Route>

          <Route path="/friends/add" exact>
          {token ?  <AddFriend />: <LoginForm/>}
          </Route>
          <Route path="/logout" exact>
           
            
          </Route>

          
      
        
      </Switch>
    </Router>
    </div>
  );
};

export default App;