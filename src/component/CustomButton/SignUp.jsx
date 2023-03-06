import React, { useState } from "react";
import "./signup.css"


const SignUp = () => {

  const [user, setUser]=useState({
    name:"",
    email:"",
    username:"",
    email:"",
    password:"",

})

let name, value;
const getUserData=(event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user, [name]:value});

};

const postData=async (e)=>{
    e.preventDefault();

    const {firstname, lastname, username, email, password}=user;

    if(firstname && lastname && username && email && password){

    

const res=  await fetch("https://ecom-682fc-default-rtdb.firebaseio.com/ecom.json",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(
        {
          firstname,
          lastname,
          username,
          email,
            password,
    
        }  
    ),

});

if(res){
    setUser({
      firstname:"",
      lastname:"",
      username:"",
      email:"",
        password:"",
    });
    alert("Data stored successfully");
}

}      

   else{
    alert("please fill all data")
   }


};





  return (
    <>
        <div method="POST">
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-outline-primary ms-2"
          data-bs-toggle="modal"
          data-bs-target="#signupModal"
          id="signupbtn"
        >
         <span className=""></span> Register
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fs-5" id="signupModalLabel">
                  Register{" "}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <button className="btn btn-primary w-100 mb-4">
                  <span className="fa fa-google me-2"></span>Sign up With Google
                </button>
                <button className="btn btn-primary w-100 mb-2">
                  <span className="fa fa-facebook me-2"></span>Sign up With Facebook
                </button>
                <form>
                <div className="mb-3">
                    <label htmlFor="exampleInput" className="Form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput" value={user.firstname} onChange={getUserData} name="firstname"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInput" className="Form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput" value={user.lastname} onChange={getUserData} name="lastname"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInput" className="Form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInput" value={user.username} onChange={getUserData} name="username"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="Form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp" value={user.email} onChange={getUserData} name="email"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1" value={user.password} onChange={getUserData} name="password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1" 
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-outline-primary w-100 mt-5" method="POST" onClick={postData}>
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp