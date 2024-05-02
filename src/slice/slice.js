import { createSlice } from "@reduxjs/toolkit"


let id = 0;

const tasks = createSlice({
    name: "tasks",
    initialState: [{
        task: "Task 1",
        isDone: false
    },
    {
        task: "Task 2",
        isDone: false
    }],
    reducers:{
        getTask: (state,action) =>{
             state.task
        },
        addTask: (state,action) => {
            state.push({
                task: action.payload.task,
                isDone: false
            });
        },
        deleteTask: (state,action) => {
            const index = state.filter((task,index) => index === action.payload.index.index);
            state.splice(index,1);
        },
        doneTask: (state,action) => {
            const index = state.findIndex((task,index) => index === action.payload.index.index);
            state[index].isDone = !state[index].isDone;
        }
    }
});


export const {getTask,addTask, deleteTask, doneTask} = tasks.actions;
export default tasks.reducer;