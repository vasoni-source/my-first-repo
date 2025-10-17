import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todos : [],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        add:(state,action)=>{
            // state.value = [...state,action]
            state.todos.push(action.payload)
            console.log("todo",state.todos)
        },
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((item)=>item!==action.payload)
        },
    }
})  
export const {add,deleteTodo} = todoSlice.actions    
export default todoSlice.reducer