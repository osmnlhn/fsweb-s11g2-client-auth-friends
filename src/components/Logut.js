import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom"
import React from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const logout= () =>{

    
    const token=localStorage.removeItem('token');

    axios.post("http://localhost:9000/api/logout",null,{
        headers:{
            Authorization: token,
        }
        
    }  ).then ((res)=>{
     
    })
    
    

}

export default logout;

