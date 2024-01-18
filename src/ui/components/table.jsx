import { useContext } from 'react';
import { TodoContext } from '../../todo/context/TodoContext';
import {  FaRegTrashAlt } from 'react-icons/fa';

const Table = ({openModal }) => {
  const { state,deleteTodo } = useContext(TodoContext);


  const handleDelete = (id) => {
    deleteTodo(id)
    console.log(`Deleting todo with ID ${id}`);
  };

  return (
    <div className=' bg-slate-800 h-[80%] w-[80%] rounded-lg overflow-auto flex flex-col justify-center items-center'>
      <div className='flex h-[15%] w-full'>
        <div className='flex items-center pl-2  w-[90%]'>
          <h2 className="text-2xl font-bold">Task</h2>
        </div>
        <div className='flex w-[10%] justify-center items-center'>
          <button className='middle none center mr-4 rounded-lg bg-teal-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-sm hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"' onClick={() => openModal()}>Create</button>
        </div>
      </div>
      <div className="h-[90%] w-[100%] bg-slate-800 overflow-auto">
        <table className="w-full">
          <thead className="sticky top-0 bg-slate-800 ">
            <tr className='text-white-950'>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Options</th>
            </tr>
          </thead>
          <tbody>
            {state.map((todo) => (
              <tr key={todo.id} className="h-12 gap-2">
                <td className="py-2 px-4 ">{todo.name}</td>
                <td className="py-2 px-4 ">{todo.description}</td>
                <td className={`py-2 px-4  w-[10%]`}>
                  <h1 className={`h-[50%] ${todo.state ? 'bg-green-400 p-1 rounded-full' : 'bg-orange-400 p-1 rounded-full'}`}>
                    {todo.state ? 'Done' : 'Pending'}
                  </h1>
                </td>
                <td className=" h-[50px] flex justify-center gap-2">
                  <button onClick={() => handleDelete(todo.id)}>
                    <FaRegTrashAlt className='text-red-700' size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
