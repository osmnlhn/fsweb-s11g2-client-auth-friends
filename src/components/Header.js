import React from "react";
import logout from "./Logut";

import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {

    const token =localStorage.getItem("token")

    return (

        <div class="container">

            <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000/">Home</a>
                    
                    
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {token &&<a class="nav-link active" aria-current="" href="http://localhost:3000/friends">Friend List</a> }
                            {token &&<a class="nav-link" href="http://localhost:3000/friends/add">Add Friend</a> }
                           {token && <button class="nav-link" onClick={logout} >Logout</button> }
                          { !token &&  <a class="nav-link" href="http://localhost:3000/login">Login</a> }
                        </div>
                    </div> 
                </div>
            </nav>
        </div>

    )


}

export default Header;