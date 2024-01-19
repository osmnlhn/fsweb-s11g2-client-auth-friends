import React , { useEffect,useState} from "react";
import axiosWithAuth  from '../module/axiosWithAuth';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    
  
    useEffect(() => {
      
      
      axiosWithAuth().get("http://localhost:9000/api/friends").then((res) => {
        setFriends(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
     
      
    },[]); 
 
  
    return (
      <div class="container" >
        <h2 >Friends List</h2>
        <ul class="list-group " >
          {friends.map((friend) => (
            <li key={friend.id} class="list-group-item ">
              {friend.name} =>> <NavLink to={`/friends/${friend.id}`} >Detail</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default FriendsList;