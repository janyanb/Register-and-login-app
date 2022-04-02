import React, { useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";


const Homepage = ({seluser}) => {
      
    //  const url = " http://localhost:9002/fetch";
    //  const[users, setUsers]= useState([]);
      

     let navigate = useNavigate();
     function routeLogin(){
         navigate("/login");
     }
     function routeEdit(){
       navigate("/editUser");
     }
     
    //  const getUsers = async () =>{
    //     const res = await fetch(url);
    //    setUsers( await res.json());
    //     }

    //  useEffect(() =>{
    //     getUsers();
    //  }, []);
     
    

  return (
       <div className="homepage">
          <h1>Homepage</h1>   
             {
              <div>    
                       <h3>Username: {seluser.name}</h3>
                       <h3>Email: {seluser.email}</h3>
                       <h3>Password: {seluser.password}</h3>
              </div>  
              }
          <br/>
          <button class= "ui button" onClick={routeEdit}>Edit User Details</button> 
          <div> _________</div>
          <button class="ui button" onClick={routeLogin} style={{marginTop:"13px"}}> Logout</button>
       </div>
     ) 
        
}


export default Homepage;