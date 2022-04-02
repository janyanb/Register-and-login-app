import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const Edit = (userinfo) =>{

    const url = " http://localhost:9002/fetch/:id";
     const[users, setUsers]= useState([]);

    const login={
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:"50vw",
        height:"50vh",
        borderRadius:"20px",
        boxShadow: "0 0 15px 5px rgba(39, 33, 33, 0.5)",
        backgroundColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.2)",
        position: "relative",
        fontFamily: "FontAwesome",
        color:"white"
    }

    const instyle={
        backgroundColor:"Transparent",
        border:"none",
        borderBottom:"1.5px solid",
        borderRadius:"0px",
        color: "white",
    };


    console.log(userinfo);

    let navigate = useNavigate();
    function routeLogin(){
        navigate("/login");
    }

    const getUsers = async () =>{
            const res = await fetch(url);
           setUsers( await res.json());
            }
    
         useEffect(() =>{
            getUsers();
         }, []);

         function Update(id){
             console.log(id)
         }
    
        return(

            <div className="editUser" style={login}>
               <h1 className="ui header" style={{color:"white" ,position:"absolute",top:'20px' }}>Edit Details</h1>
                <i onClick={routeLogin} className="close icon"style={{position:"absolute", top:"28px", right:"20px", fontSize:"20px"}}></i>
                <input type="input " placeholder="Username" style={instyle}/>
                <br/><br/>
                <input type="input"  placeholder="Password" style={instyle}/>
                <br/><br/>
                <button onClick={Update(users._id)}>Update</button>
               
            </div>

        )
}

export default Edit;