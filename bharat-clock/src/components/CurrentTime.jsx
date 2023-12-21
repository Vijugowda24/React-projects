import React, { useEffect, useState } from 'react'

const CurrentTime = () => {
  const [currentTime, setCurrentTime]= useState(new Date())

  useEffect(()=>{
const interval = setInterval(() => {
  setCurrentTime(new Date())
}, 1000);

return ()=>{
  clearInterval(interval)
}
  }, [])
  return (
    <div>
      <p className=''>This is current time :{currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime