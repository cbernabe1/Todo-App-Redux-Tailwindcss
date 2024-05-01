import { createSlice } from "@reduxjs/toolkit"


let id = 0;

const tasks = createSlice({
    name: "tasks",
    initialState: [],
    reducers:{
        addTask: (state,action) => {
            state.push({
                id: id++,
                task: action.payload.task
            });
        }
    }
});


export const {addTask} = tasks.actions;
export default tasks.reducer;