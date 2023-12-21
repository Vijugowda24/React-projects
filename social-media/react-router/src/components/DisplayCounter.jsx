import React from 'react'
import { useSelector } from 'react-redux'
import { counterReducer } from '../redux/reducer'

function DisplayCounter() {
  const counter = useSelector(state=> state.counter)

  return <p className="lead mb-4">Counter current value :{counter}</p>
}

export default DisplayCounter