import React, {useState} from 'react'
import CreateTask from './createTask';
import {Link} from 'react-router-dom';

export default function NavBar({addTask}) {
    const [isFormShown, setIsFormShown] = useState(false);
    return (
        <div className="relative flex flex-row w-full">
            <div className="flex flex-row gap-3">
            <Link to='/profile' className='text-white px-4 py-2 rounded-md bg-navyblue focus:outline-none focus:bg-navyBlue'>Profile</Link>
            <button
                onClick={() => setIsFormShown(true)}
                className="text-white px-4 py-2 rounded-md bg-navyblue focus:outline-none focus:bg-navyBlue"
            >
                Create New Task
            </button>
            </div>
            {isFormShown && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-graywhite px-10 py-8 w-1/2 rounded-lg shadow-lg relative">
                        <button
                            onClick={() => setIsFormShown(false)}
                            className="absolute top-2 right-4 text-red font-bold text-xl hover:text-red-400"
                        >
                            &times;
                        </button>
                        <CreateTask handleTask={addTask} handleForm ={setIsFormShown} />
                    </div>
                </div>
            )}
        </div>
    );
}