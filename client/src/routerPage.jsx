import React from 'react'
import {Routes, Route} from 'react-router-dom';
import LogIn from './component/LogIn/logIn';
import SignUp from './component/LogIn/signUp';
import Profile from './component/Profile/Profile';
import Task from './component/Task/Task';
import Error from './component/Error/Error';
import Entry from './component/LogIn/Entry';
import Home from './component/Home/Home';

export default function RouterPage() {
  return (
    <div>
        <Routes>
            <Route path='/entry' element={<Entry/>}>
                <Route index element={<LogIn/>}/>
                <Route path='login' exact element={<LogIn/>}/>
                <Route path='register' exact element={<SignUp/>}/>
            </Route>
            <Route path='/' element={<Home/>}>
                <Route index element={<Home/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path = '/*' element={<Error/>}/>
            </Route>
        </Routes>
    </div>
  )
}
