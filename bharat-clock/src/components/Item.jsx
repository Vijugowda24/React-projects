import React from 'react'
import styles from './Item.module.css'
function Item({item, bought, handleClick}) {
  // console.log(styles)

  
  return (
    <>
 <li className={`${styles.kgItem} list-group-item ${bought && 'active'}`} key="item" ><span className={styles.kgSpan}>{item}
  </span>
  <button className="btn btn-info mx-3 float-end" onClick={handleClick}>Buy</button>
  </li>

    </>
  )
}

export default Item