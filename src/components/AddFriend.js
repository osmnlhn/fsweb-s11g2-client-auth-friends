import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../module/axiosWithAuth';
import axios from 'axios';

const AddFriend = () => {
  const [formData,setFormData]=useState({
    name:"",
    age:0,
    email:"",
  })


  const history=useHistory();

  const handleFormSubmit = (e) => {
    const {name,value}=e.target;
    
    setFormData({
        ...formData,
        [name]:value,
    })
}

    const formSubmit = (e) => {
      
      e.preventDefault();

      console.log("Data:",formData)

    
  
      axiosWithAuth().post("http://localhost:9000/api/friends",formData).then((res)=> {
      console.log("Res",res);
      
  
      history.push("/friends")})

  }
  return (
    <div class="container">
      <h2>Add Friend</h2>
      <form onSubmit={formSubmit}>
        <label>
          Name:
          <input type="text" name='name' onChange={handleFormSubmit} required  class="form-control"/>
        </label>
        <br />
        <label>
          Age:
          <input type="number" name='age' onChange={handleFormSubmit} required  class="form-control"/>
        </label>
        <br />
        <label>
          Email:
          <input type="email" name='email' onChange={handleFormSubmit} required  class="form-control"/>
        </label>
        <br />
        <br />
        <button type="submit" class="btn btn-primary">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend