import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate();
    
  return (
    <div className='flex flex-col items-center h-screen justify-center'>
    <h1 className='text-3xl font-semibold mb-3'>Be a part of Atlius community</h1>
    <div className='border bg-slate-100 w-1/3 flex flex-col gap-2 justify-start p-5 rounded-lg shadow-sm'>
        <h1 className='text-center font-xl'>Create an account</h1>
        <form className='flex flex-col gap-2'>
            <label htmlFor='username' className='flex flex-col'>Username
                <input type='text' name='username' className='border rounded-md'/>
            </label>
            <label htmlFor='email' className='flex flex-col'>Email
                <input type='email' name='email' className='border rounded-md'/>
            </label>
            <label htmlFor='password' className='flex flex-col'>Password
                <input type='password' name='password' className='border rounded-md'/>
            </label>
            <button type='submit' name='login' className='border bg-black text-white w-min px-3 py-1 rounded-md'>SignUp</button>
        </form>
        <button onClick={()=>navigate('/login')}>Already have an account</button>
    </div>
</div>
  )
}
