import React from 'react'
import styles from './Buttons.module.css';

function Buttons({onBtnClick}) {
  const buttonsName= ['C', '1', '2', '+', '3','4','-','5', '6','*', '7', '8','/','=','9','0', '.']
  return (
    <div id={styles.buttonsContainer}>
  {
    buttonsName.map(button=>(
      <button className={styles.button} key={button} onClick={()=>onBtnClick(button)}>{button}</button>
    ))
  }
  
  </div>
  )
}

export default Buttons