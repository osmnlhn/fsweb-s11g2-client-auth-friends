import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendList'
import AddFriend from './components/AddFriend'
import Header from './components/Header'
import HomePage from './components/Homepage';
import FriendDetails from './components/FriendDetail';


const App = () => {

  const token=localStorage.getItem("token")

 
  return (
    <div className='App'>
    <Router>
   <Header />
    
      <Switch>
      
          <Route path="/" exact>
          <HomePage />  
          </Route>

          <Route path="/login" exact>
                <LoginForm />  
          </Route>

          <Route path="/friends" exact>
             { token ? <FriendsList /> : <Redirect to="/login" /> }
          </Route>

          <Route path="/friends/add" exact>
          {token ? <AddFriend />: <Redirect to="/login" />}
          </Route>

          <Route path="/friends/:friendId" exact>
           <FriendDetails /> 
          </Route>

        
      </Switch>
    </Router>
    </div>
  );
};

export default App;