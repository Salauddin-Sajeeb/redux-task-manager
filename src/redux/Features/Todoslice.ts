import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Tdodo= {
    title:string,
    description:string,
    isCompleted?:boolean,
    _id:string
    } 

type TinitialState= {
    todos:Tdodo[]
    }  
const initialState:TinitialState={
    todos:[]
    };

const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
    addTodo:(state,action:PayloadAction<Tdodo>)=>
    {
    state.todos.push({ ...action.payload,isCompleted:false})
    },
    Removetodo:(state,action:PayloadAction<string>)=>{
    state.todos=state.todos.filter(item=>item._id !== action.payload)
    },
    ToggleComplete:(state,action:PayloadAction<string>)=>{
        const task=state.todos.find((item)=>item._id===action.payload);
        task!.isCompleted=!task?.isCompleted
    }
    }
})

export const {addTodo,Removetodo,ToggleComplete}=todoslice.actions;
export default todoslice.reducer;