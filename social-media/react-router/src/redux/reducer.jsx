const INITIAL_VALUE ={
  counter:0,
  privacy:false
}

export const counterReducer = (state=INITIAL_VALUE, action)=>{
  console.log("action", action);
if(action.type === 'INCREMENT'){
  return {...state, counter : state.counter + action.payload}
}else if(action.type === 'DECREMENT'){
  return {...state,counter: state.counter - action.payload}
} else if(action.type === "ADD"){
  return {...state, counter : state.counter + +action.payload.num}
}else if(action.type === "SUBTRACT"){
  return {...state, counter : state.counter - action.payload.num}
}else if (action.type === 'PRIVACY_TOGGLE'){
return {...state, privacy: !state.privacy}
}
  return state;
}