import React, {useState} from 'react'

export default function SignUp() {
    const [userDetails,setUserDetails]=useState({
        fullName:'',
        email:'',
        password:'',
})

  // handle submit of user credential
  const handleInputChanges=(e)=>{
    setUserDetails(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {fullName,email,password} = userDetails;
    console.log(fullName,email,password);
    setUserDetails({fullName:'',email:'',password:'',})
  }
    
  return (
<div className='w-[80%]'>
    <section className="flex-col-center gap-2 py-5 shadow-md rounded-md my-5">
    <h1 className="text-2xl font-bold">Sign Up</h1>
    <p className="font-semibold">Create your account</p>
    <form action="POST" onSubmit={handleSubmit} className="flex flex-col items-center gap-2 justify-center">
        <label htmlFor="text">Full Name</label>
        <input 
        type="text" 
        name="fullName" 
        placeholder="eg:Ram" 
        required
        value={userDetails.fullName}
        min={3}
        onChange={handleInputChanges}
        />
        <label htmlFor="email">Email address</label>
        <input 
        type="email" 
        name="email" 
        placeholder="abc@email.com" 
        required
        value={userDetails.email}
        onChange={handleInputChanges}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        name="password" 
        placeholder="*******" 
        required
        min={4}
        value={userDetails.password}
        onChange={handleInputChanges}
        />
        <button type='submit' className="btn">Register</button>
    </form>
    </section>
</div>
  )
}
