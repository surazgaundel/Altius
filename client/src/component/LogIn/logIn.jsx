import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();
  const [logInDetails,setLogInDetails]=useState({
    email:'',
    password:'',
  })

  // handle submit of user credential
  const handleInputChanges=(e)=>{
    setLogInDetails(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {email,password} = logInDetails;
    try{
      const response=await axios.post('http://localhost:8080/login',{email,password})
      if(response.status===201){
        handleSuccess(response.data.message)
        navigate('/');
        localStorage.setItem('token',response.data.token)
        console.log(response.data)
      }
    }
    catch(err){
      handleError(err.response.data.message)
    }
    setLogInDetails({email:'',password:''})
  }

  return (
    <div className='w-[80%]'>
    <section className="flex-col-center gap-2 py-5 shadow-md rounded-md my-5">
      <h1 className="text-2xl font-bold">Log In</h1>
      <p className="font-semibold">Log in to your account</p>
      <form className="flex flex-col items-center gap-2 justify-center">
      <label htmlFor="email">Email address</label>
      <input 
      type="email" 
      name="email" 
      placeholder="abc@email.com" 
      required
      value={logInDetails.email}
      onChange={handleInputChanges}
      />
      <label htmlFor="password">Password</label>
      <input 
      type="password" 
      name="password" 
      placeholder="*******" 
      required
      value={logInDetails.password}
      onChange={handleInputChanges}
      />
        <button>Forget Password ?</button>
        <button type='submit'className="btn">Log In</button>
        {/* <Link type='submit'  href='/home'>Log In</Link> */}
      </form>
    </section>
  </div>
  );
}
