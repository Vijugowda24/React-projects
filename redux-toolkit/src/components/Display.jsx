import React from 'react'
import {useSelector} from 'react-redux';

function Display() {
  const counter = useSelector(state => state.counter.counterVal);
  console.log("display val", counter);
  return (
    <p className="lead mb-4">Counter current value :{counter}</p>
  )
}

export default Display