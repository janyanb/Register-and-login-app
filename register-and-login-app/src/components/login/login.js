import React,{useState, }from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";


const Login = ({setSelUser}) => {
    
   

    const instyle={
        backgroundColor:"Transparent",
        border:"none",
        borderBottom:"1.5px solid",
        borderRadius:"0px",
        color: "white"
    };
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
        fontFamily: "FontAwesome"
    }
    let navigate = useNavigate();
    function routeRegister(){
        navigate("/register");
    }

    
    const [user,setUser] = useState({
         email:"",
         password:"",
    })

    const handleChange = e =>{
        
        const { name, value } = e.target
        setUser({
              ...user,
              [name]: value
        })   
        setSelUser(user) 
    }
    
     const Login = () =>{
                    navigate("/")
        axios.post("http://localhost:9002/login", user)
        .then(res =>alert(res.data.message))
       
        }

        
        

     return (
        <div className="login" style={login}>
            <form className="ui form" >
                <div className="field">
                    <input type="text" style={instyle} name="email" value={user.email} onChange={handleChange} placeholder="Email ID" autoComplete="off" />
                </div>
                <div className="field">
                    <input type="password" style={instyle}  name="password" value={user.password} onChange={handleChange} placeholder="Your Password" autoComplete="off"/>
                </div><br/>
                <button type="button " className="ui button" style={{marginRight:"5px", paddingLeft:"30px", paddingRight:"30px"}} onClick={Login}>Login</button>
                <div style={{padding:"8px" , color:"white"}}>- Or -</div>
                <button className="ui button" onClick={routeRegister}>Register</button>
            </form>
        </div>
     ) 
}


export default Login;