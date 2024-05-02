import React,{useState} from 'react'
import { addTask } from '../slice/slice';
import { useDispatch } from 'react-redux';
import Task from './Task';
const TextArea = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    function handleOnClick(){
        dispatch(addTask({task: input}));
    }
  return (
    <div className='flex flex-col items-center m-10'>
        <h1 className='uppercase font-semibold text-3xl mb-10'>Todo App</h1>
        <textarea name="task" id="" cols="30" rows="5" onChange={(e)=> setInput(e.target.value)} value={input} className='border border-lime-400 p-3 outline-none w-full'></textarea>
        <button className='border-2 border-none px-5 py-2 mt-5 rounded-lg bg-lime-600 text-white w-full
         hover:bg-lime-400' onClick={handleOnClick}>Add Task</button>
    </div>
  )
}

export default TextArea