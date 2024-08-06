import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const [error, setError] =useState({
        emailError:'',
        passwordError:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.email && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email))) {
            setError({...error, emailError:'Please enter valid email'});
        }
        if(formData.password && ((/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/).test(formData.password))){
            setError({...error, emailError:'Please enter valid password'});
        }
    }
    
    const handleChange=(e)=>{
        const target = e.target;
        setFormData({...formData,[target.name]:target.value});
    }
    
    console.log('>>>',formData);
  return (
    <div className="flex flex-col items-center h-screen justify-center">
        <h1 className='text-3xl font-semibold text-center my-5'>Welcome to Altius </h1>
      <div className="border bg-slate-100 w-1/3 flex flex-col gap-2 justify-start p-5 rounded-lg shadow-sm">
        <h1 className='text-center font-xl'>LogIn</h1>
        <form className="flex flex-col gap-2">
          <label htmlFor="email" className='flex flex-col'>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="border rounded-md"
            />
            {error.emailError ? <p className='text-xs text-red-500'>{error.emailError}</p>: null}
          </label>
          <label htmlFor="password" className='flex flex-col'>
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="border rounded-md"
            />
            {error.passwordError ? <p className='text-xs text-red-500'>{error.passwordError}</p>: null}

          </label>
          <button
            onSubmit={handleSubmit}
            type="submit"
            name="login"
            className="border bg-black text-white w-min px-3 py-1 rounded-md"
          >
            LogIn
          </button>
        </form>
        <button onClick={()=>{
                navigate('/signup')
                }}>
            Create An Account ?
            </button>
      </div>
    </div>
  );
}
