import {useEffect, useReducer, useState} from 'react'
import NavBar from './NavBar';

const initialState = {
  tasks:[]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    
    case "UPDATE_TASK":
      // eslint-disable-next-line no-case-declarations
      const getTask = state.tasks.filter(task=>task.id === action.payload.id);
      getTask.status = action.payload.status;

      return {
        ...state,
        tasks: [...state.tasks, getTask]
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter(item => item.id !== action.payload)]
      };

    default:
      return state;
  }
};

export default function Task() {
  const [state,dispatch] =useReducer(reducer, initialState);


    const updateStatus = (id, newStatus) => {
      dispatch({ type: "UPDATE_TASK", payload:{id, newStatus} });
    };  

    const deleteTask = (id) => {
      dispatch({ type: "DELETE_TASK", payload: id });
    };


    return (
        <div className="mt-10 p-4 rounded-lg shadow-lg">
          <NavBar addTask={(title, description, status) => dispatch({type: "ADD_TASK", payload: {title, description, status}})}/>
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Status</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.tasks?.map(task => (
                        <tr key={task.id}>
                            <td className="py-2 px-4 border-b border-gray-600 text-center">{task.title}</td>
                            <td className="py-2 px-4 border-b border-gray-600 text-center">{task.description}</td>
                            <td className="py-2 px-4 border-b border-gray-600 text-center">
                                <select
                                    value={task.status}
                                    onChange={(e) => updateStatus(task.id, e.target.value)}
                                    className="p-2 border border-gray-600 rounded-md focus:outline-none focus:border-indigo-500"
                                >
                                    <option value="toDo">To Do</option>
                                    <option value="inProgress">In Progress</option>
                                    <option value="done">Done</option>
                                </select>
                            </td>
                            <td className="py-2 px-4 border-b text-center border-gray-600">
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
