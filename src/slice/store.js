import { configureStore } from "@reduxjs/toolkit";
import tasks from './slice';

const store = configureStore({
    reducer: tasks
});

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
})

export default store;