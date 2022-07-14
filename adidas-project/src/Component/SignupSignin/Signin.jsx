import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Signin.css"
const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
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
     <form className='signIn' onSubmit={submitData}>
      <h1>Create Your Account </h1>
      <p className="getdiscount">Sign up now and get 15% off your first order.</p>

      <label className="bold-label">Name</label>
      <input type='text' name='name' onChange={handleData} required placeholder="Enter your name" />
      <label className="bold-label">Email</label>
      <input type='email' name='email' onChange={handleData} required placeholder="Enter your email" />
      <label className="bold-label">Number</label>
      <input type='text' name='number' onChange={handleData} required placeholder="Enter your number" />
      <label className="bold-label">Password</label>
      <input type='password' name='password' onChange={handleData} required  placeholder="Enter your password"/>
      <span>
        By tapping Next, you agree to our <span>Privacy Policy</span> and{" "}
        <span>Terms & Conditions</span>
      </span>
      <button  onClick={()=> navigate("/signup")}  type='submit'>Sign Up</button>
      
    </form>
   </div>
     <Footer/>
   </>
  );
};

export default Signin;
