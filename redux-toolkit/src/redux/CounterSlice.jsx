import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:{counterVal:0},
  reducers:{
    increment:(state)=>{
      state.counterVal++
    },
    decrement:(state)=>{
state.counterVal--
    },
    add:(state, action)=>{
      console.log(state, action);

      state.counterVal += Number(action.payload.num)

    },
    subtract:(state, action)=>{
      state.counterVal -= Number(action.payload.num)
    }
  }
})


export const privacySlice = createSlice({
name:'privacy',
initialState:false,
reducers:{
  togglePrivacy:(state)=>{
return state = !state
  }
}
})


export const {increment,decrement, add, subtract } = counterSlice.actions;
export const { togglePrivacy} = privacySlice.actions

export default counterSlice;