import axios from "axios";
import React,{ useEffect, useState } from "react";
import "./register.css";
import {useNavigate} from "react-router-dom"

const Register = () => {
    const instyle={
        backgroundColor:"Transparent",
        border:"none",
        borderBottom:"1.5px solid",
        borderRadius:"0px",
        color: "white",
    };
    const login={
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:"40vw",
        height:"60vh",
        borderRadius:"20px",
        boxShadow: "0 0 15px 5px rgba(39, 33, 33, 0.5)",
        backgroundColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.2)",
        position: "relative",
        fontFamily: "FontAwesome"
    }
    const errordisp={
        color:"white",
        paddingTop:"3px",
        fontFamily: "FontAwesome"
    }

    let navigate = useNavigate();
    function routeLogin(){
        navigate("/login");
    }

    const initialValues = {
        name:"",
        email:"",
        password:"",
    }
   
   const [user, setUser] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);
  

    const handleChange = e =>{
        //console.log(e.target)
        const { name, value } = e.target
        setUser({
              ...user,
              [name]: value    //[]=takes name as key and assigns value
        });   
        console.log(user);
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(user));
        setIsSubmit(true)
    };
  
    const register = () => {
             
             if(user.name && user.email && user.password){
             axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                })
              }
            } 

     useEffect(() => {
         console.log(formErrors);
         if (Object.keys(formErrors).length === 0 && isSubmit){
             console.log(user);
         }
     },[formErrors]);
    
    const validate = (uservalue) => {
        const error = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(!uservalue.name){
            error.name = "Username is required";
        }
        if(!uservalue.email){
            error.email = "Email is required";
        }else if(!regex.test(uservalue.email)){
            error.email= "Enter a valid email format";
        }
        if(!uservalue.password){
            error.password = "Password is required";
        }else if(uservalue.password.length < 4) {
            error.password = "Password should be more than 4 characters";
        }else if(uservalue.password.length > 10){
            error.password = "Password should be less than 10 characters";
        }
      return error;
    };

     return (
       <div className="register" style={login}>
           {(Object.keys(formErrors).length === 0 && isSubmit ) ? (
               <div classname="ui message success " style={errordisp}>Sign up Successfull, login to continue</div>
           ) : (
            <div></div>
           ) }
           <form className="ui form" onSubmit={handleSubmit}>
                 <div className="field">
                    <input type="text" style={instyle}  name="name" value={user.name} onChange={handleChange} placeholder="Username" autoComplete="off"/>
                    <p style={errordisp}>{formErrors.name}</p>
                </div>
                <div className="field">
                    <input type="text" style={instyle} name="email" value={user.email} onChange={handleChange}  placeholder="Email ID" autoComplete="off" />
                    <p style={errordisp}>{formErrors.email}</p>
                </div>
                <div className="field">
                    <input type="password" style={instyle} name="password" value={user.password}  onChange={handleChange} placeholder="Password" autoComplete="off"/>
                    <p style={errordisp}>{formErrors.password}</p>
                </div><br/>
                <button className="ui button" onClick={register} type="submit">Register</button>
                <div style={{padding:"8px" , color:"white"}}>- Or -</div>
                <button className="ui button" style={{paddingLeft:"30px", paddingRight:"30px"}} onClick={routeLogin}>login</button>
            </form>
       </div>
     ) 
}


export default Register;