import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from '../module/axiosWithAuth';

const LoginForm = () => {
 const [credentials, setCredentials] = useState({
  username:'',
  password:'',
 });

 const history=useHistory();

  const login = (e) => {
    
    e.preventDefault();
    console.log("Data:",credentials)

    axiosWithAuth().post("http://localhost:9000/api/login",credentials).then((res)=> {
    console.log("Res",res);
    localStorage.setItem("token",res.data.token)

    history.push("/friends")})
    .catch((errr)=> console.log(errr));
    
  }

  const handleChange = (event)=> {
   const {name,value}=event.target;

      setCredentials({
        ...credentials,
        [name]:value,
        }
      )
      
  }

    return (
      <div class="container">
        <h2 >Login Page</h2>
      <div >
        <form onSubmit={login}>
          <label>
            Userame:   
          <input
            type="text"
            name="username"
            value={credentials.username}
            class="form-control"
            onChange={handleChange}
          />
          </label>
          <br/>
          <label>
            Password : 
          <input
            type="password"
            name="password"
            value={credentials.password}
            class="form-control" 
            onChange={handleChange}
          />
          </label>
          <br/>
            <div class="checkbox">
              <label> <input type="checkbox" name="remember" /> Remember me</label>
            </div>
          <button type="submit" class="btn btn-primary">Log in</button>
        </form>
      </div>
      </div>
    )

    }
export default LoginForm;