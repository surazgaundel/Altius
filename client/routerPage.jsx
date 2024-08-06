import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LogIn from './src/component/LogIn/logIn';
import SignUp from './src/component/LogIn/signUp';
import Profile from './src/component/Profile/Profile';
import Task from './src/component/Task/Task';
import Error from './src/component/Error/Error';
import Entry from './src/component/LogIn/Entry';

export default function RouterPage() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Entry/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path = '/profile' element={<Profile/>}/>
            <Route path = '/home' element={<Task/>}/>
            <Route path = '/*' element={<Error/>}/>
        </Routes>
    </div>
  )
}
