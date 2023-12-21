import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function CurrentTime() {
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
const timer = setInterval(()=>{
setTime(new Date())
}, 1000)


return ()=>{
  clearInterval(timer)
}
  }, [])
  return (
    <p>
this is curtent Time : {time.toLocaleDateString()} -{time.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime