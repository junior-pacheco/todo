import React, { useState } from 'react';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const ListTodo = () => {
  const { state, updateState } = useContext(TodoContext);

  const handleToggle = (id) => {
    updateState(id);
  };

  return (
    <div className="p-5 flex items-center justify-center bg-slate-900">
      <div className="md:w-2/3 w-[80%] md:h-4/5 h-full rounded overflow-hidden shadow-lg">
        <div className="w-full h-16 border-b flex items-center justify-center bg-teal-500 text-white">
          <h1 className="font-bold text-base md:text-3xl">My Creative TODO List</h1>
        </div>
        <div className="h-full p-4 overflow-y-auto">
          {state.map((todo) => (
            <div key={todo?.id} className="mb-4 p-4 border-b bg-slate-800 rounded-md shadow-md">
              <h1 className="text-base md:text-2xl font-semibold mb-2">Name: <span className="text-teal-500 text-base md:text-3xl">{todo.name}</span></h1>
              <p className="text-white mb-2">Description: <span className="text-gray-500">{todo.description}</span></p>
              <p className={`font-bold text-sm ${todo.state ? 'text-green-500' : 'text-red-500'}`}>
                State: <span>{todo.state ? 'Completed' : 'Pending'}</span>
              </p>
              {!todo.state && (
                <div className='flex justify-end'>
                  <button
                    onClick={() => handleToggle(todo.id)}
                    className="bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600"
                  >
                    Confirm
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
