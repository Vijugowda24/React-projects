import React, { useState } from 'react'
import Item from './Item'

function FoodItems({fooitems, bgColor}) {
  const [activeItems, setActiveItems] = useState([])
  
  const handleClick = (item)=>{
    console.log("clicked", item);

  }
  let onBuyBtn = (event, item)=>{
    let newItems = [...activeItems, item]
    setActiveItems(newItems)

  }

  return (
    <>
  <ul className="list-group">
{
  fooitems.map(item=>(
   <Item item={item} key={item} handleClick={(event)=>onBuyBtn(item, event)} bought={activeItems.includes(item)} />
  ))
}
</ul>
</>
  )
}

export default FoodItems