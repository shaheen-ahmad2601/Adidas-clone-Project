import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
// import Signin from "./Signin";
import "./Signin.css"


const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
  <>
  <Navbar/>
    <div className="signin-container">
      <h1 className="create-your">Sign in</h1>
      <form className='signOut' onSubmit={submitData}>
      <span>Enter your email to get started</span>
      <label className="label-tag">Email</label>
      <input type='email' name='email' onChange={handleData} required />
      <label className="label-tag">Password</label>
      <input type='password' name='password' onChange={handleData} required />
      <span>
        By tapping Next, you agree to our <span>Privacy Policy</span> and{" "}
        <span>Terms & Conditions</span>
      </span>
      <button onClick={()=> navigate("/")}  type='submit'>Sign In</button>
    </form>
    </div>
   <Footer/>
  </>
  );
};

export default SignUp;
