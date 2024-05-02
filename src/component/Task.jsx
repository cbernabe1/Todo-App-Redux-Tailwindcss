import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTask,deleteTask,doneTask } from '../slice/slice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
const Task = () => {
  const dispatch = useDispatch();
  const {tasks} = useSelector(state => state);
  console.log(tasks);
  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  function handleOnDelete(index){
    dispatch(deleteTask({index: index}));
  }

  function handleOnDone(index){
    dispatch(doneTask({index: index}));
  }


  return (
    <div className='flex flex-col space-y-3'>{
      tasks.map((task, index) => <li className='list-none border border-blue-400 px-6 py-3 rounded-lg flex justify-between' key={index}>
      <p className={task.isDone && 'line-through'}>{task.task}</p> 
      <div className='flex ml-5 space-x-3'>
      <button className=' text-red-500' onClick={() => handleOnDelete({index})}><DeleteOutlineIcon/></button>
      <button className='text-lime-500' onClick={() => handleOnDone({index})}><DoneIcon/></button>
      </div>
      </li>)}</div>
  )
}

export default Task