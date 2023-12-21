import React from 'react'

function ErrorMessage({fooitems}) {
  return (
    <div>
      { fooitems.length === 0 && <h1>I'm still hungry</h1>}
    </div>
  )
}

export default ErrorMessage