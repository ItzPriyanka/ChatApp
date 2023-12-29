import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import {auth} from "../firebase";
import{signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const navigate=useNavigate();

    // const [err, setErr]=useState(false)
    // const[loading, setLoading]=useState(false)
    const handleSubmit=async(e)=>{
      e.preventDefault();
      const email=e.target[0].value;
      const password=e.target[1].value;
      try{
        await signInWithEmailAndPassword(auth,email,password);
        navigate("/");
        console.log('Login');
      }catch(err){
        alert(err.message);
      }
    }   
  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Baatein Karo</span>
      <span className="title">Login</span>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign in</button>
      </form>
      <p>You don't have an account? <Link to="/register">Register</Link></p>
    </div>
  </div>
  );
}

export default Login