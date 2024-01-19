import React from "react";

const HomePage = () => {
    const token=localStorage.getItem("token");
   
    return (
        <p style={{textAlign:"center"}} >Welcome Home</p>
    )
    
}

export default HomePage;