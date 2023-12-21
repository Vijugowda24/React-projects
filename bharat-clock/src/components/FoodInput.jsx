import React from 'react'
import styles from './FoodInput.module.css';
function FoodInput({handleChange, handleKeyDown}) {
  return <input type="text" placeholder='Enter Food Item here' className={styles.foodInput} onChange={handleChange} onKeyDown={handleKeyDown}/>
}

export default FoodInput