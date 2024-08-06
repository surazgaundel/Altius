/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const CreateTask = ({handleTask, handleForm}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(null);

    const id=new Date().getTime();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleTask(id,title,description,status)
        setTitle('');
        setDescription('');
        setStatus(null);
        handleForm(false);
    };

return (
    <div className="mt-10 p-10 rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-navyblue">Create a New Task</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
        <label htmlFor="title" className="block text-navyblue font-semibold mb-2">
            Title
        </label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-black rounded-md focus:outline-none focus:border-indigo-500"
            required
        />
        </div>
        <div className="mb-4">
        <label htmlFor="description" className="block text-navyblue font-semibold mb-2">
            Description
        </label>
        <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-black rounded-md focus:outline-none focus:border-indigo-500"
            rows="4"
            required
        ></textarea>
        </div>
        <div className="mb-4">
        <span className="block text-navyblue font-semibold mb-2">Status</span>
        <div className="flex items-center mb-2">
            <input
            type="radio"
            id="todo"
            name="status"
            value="toDo"
            checked={status === 'toDo'}
            onChange={(e) => setStatus(e.target.value)}
            className="mr-2 focus:ring-indigo-500"
            />
            <label htmlFor="todo" className="text-navyblue">
            To Do
            </label>
        </div>
        <div className="flex items-center mb-2">
            <input
            type="radio"
            id="inprogress"
            name="status"
            value="inProgress"
            checked={status === 'inProgress'}
            onChange={(e) => setStatus(e.target.value)}
            className="mr-2 focus:ring-indigo-500"
            />
            <label htmlFor="inprogress" className="text-navyblue">
            In Progress
            </label>
        </div>
        <div className="flex items-center mb-2">
            <input
            type="radio"
            id="done"
            name="status"
            value="done"
            checked={status === 'done'}
            onChange={(e) => setStatus(e.target.value)}
            className="mr-2 focus:ring-indigo-500"
            />
            <label htmlFor="done" className="text-navyblue">
            Done
            </label>
        </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-4">
        <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
        >
        Create Task
        </button>

        <button
        onClick={()=>handleForm(false)}
        className="w-full bg-red text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
        >
        Cancel
        </button>
        </div>
    </form>
    </div>
);
};

export default CreateTask;
