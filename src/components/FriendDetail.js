import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axiosWithAuth from "../module/axiosWithAuth";
import axios from "axios";

const FriendDetails = () =>{
 const [detail,setDetail]=useState([])
 const {friendId}=useParams();

 useEffect(()=>{

   axiosWithAuth().get(`http://localhost:9000/api/friends/${friendId}`)
   .then((res)=>{
        setDetail(res.data)
        console.log(res.data)
    });
 },[friendId])

 return (
    <div>
        <h2>Friend Detail</h2>
        <p >Age:{detail?.age}</p>
        <p>Email : {detail?.email}</p>
        <p>Id: {detail?.id}</p>
        <p>Name: {detail?.name}</p>
        <a href="http://localhost:3000/friends">Back</a>
    </div>
 )

}

export default FriendDetails;