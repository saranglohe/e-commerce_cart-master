import React from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {  useState } from "react";
// import Mainhome from "./Mainhome";
import {  NavLink, useNavigate } from 'react-router-dom'
import app from "./firebase";
import "./Homee.css" 


function Homee(){

   const auth = getAuth(app);
   const navigate=useNavigate();

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
    // const signup=()=>{
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user)
    //     alert("account created successfully")
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     // const errorMessage = error.message;
    //     alert(errorCode)
    //     // ..
    //   });
    // }
    
    const signin=()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // alert("user successfully sign in")
        navigate("/header")
    
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
    
      });
    }
    return(
        <>
        <div className="loginpage">

        <h1 className="loginword">Login </h1>
      <input className="emailinput" type={"email"} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}></input>
      <input className="passwordinput" type={"password"} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}></input>

      <button className="registerbtn" onClick={signin}>Sign In</button>

      <p className="donthaveactn">Don't have account?</p>
      <NavLink to="/createaccount"><button className="loginbtn" >Create Account</button></NavLink>
     
      <p className="logo">@copyright urban outfitter</p>
     
      
       </div>
        </>
    )
}
export default Homee