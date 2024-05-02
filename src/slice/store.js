import { configureStore } from "@reduxjs/toolkit";
import tasks from './slice';

const store = configureStore({
    reducer: {
        tasks: tasks
    }
});


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

export default store;