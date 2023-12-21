import { createSlice } from "@reduxjs/toolkit"

export const privacySlice = createSlice({
  name:'privacy',
  initialState:false,
  reducers:{
    togglePrivacy:(state)=>{
  return state = !state
    }
  }
  })

  export const { togglePrivacy} = privacySlice.actions