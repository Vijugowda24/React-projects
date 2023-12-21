import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Controls() {
  const dispatch = useDispatch()
const inputElement = useRef();
  const handleIncrement = ()=>{
    dispatch({type:'INCREMENT', payload:4})
  }
  const handleDecrement = ()=>{
dispatch({type:'DECREMENT', payload:6})
  }

  const handleChange = ()=>{

  }

  const handleSubtract  =()=>{
dispatch({
  type:'SUBTRACT', payload:{
    num: inputElement.current.value
  }
})
inputElement.current.value = ""
  }

  const handleadd =()=>{
    dispatch({type:'ADD', payload: {
      num: inputElement.current.value
    }    

  })
  inputElement.current.value = ""

  } 

  const handlePrivacyToggle = ()=>{
    dispatch({
      type:'PRIVACY_TOGGLE'
    })
  }
  return   (
    <>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
<div className="d-flex flex-column gap-3 ">
<div>
<button type="button" className="btn btn-primary btn-lg px-4 gap-3 mx-3" onClick={handleIncrement}>+1</button>
  <button type="button" className="btn btn-success btn-lg px-4" onClick={handleDecrement}>-1</button>
  <button type="button" className="btn btn-warning btn-sm mx-2" onClick={handlePrivacyToggle}>Privacy Toggle</button>
</div>
  <div className='d-flex flex-row'>
  <input type="text" onChange={handleChange} placeholder='Enter number' ref={inputElement}/>
  <button type="button" className="btn btn-info btn-sm px-4 mx-1" onClick={handleadd}>Add</button>
  <button type="button" className="btn btn-danger btn-sm px-4" onClick={handleSubtract}>Subtract</button>
  </div>
</div>
</div>
    </>
  )
}

export default Controls