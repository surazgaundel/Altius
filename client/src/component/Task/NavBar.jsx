import React, {useState} from 'react'
import CreateTask from './createTask';


export default function NavBar({addTask}) {
    const [isFormShown, setIsFormShown] = useState(false);

    return (
        <div className="relative flex flex-row w-full mt-5 justify-end">
            <button
                onClick={() => setIsFormShown(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
                Create New Task
            </button>
            {isFormShown && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-black px-10 py-8 w-1/2 rounded-lg shadow-lg relative">
                        <button
                            onClick={() => setIsFormShown(false)}
                            className="absolute top-2 right-4 text-white font-bold text-xl hover:text-red-400"
                        >
                            &times;
                        </button>
                        <CreateTask handleForm={addTask} />
                    </div>
                </div>
            )}
        </div>
    );
}