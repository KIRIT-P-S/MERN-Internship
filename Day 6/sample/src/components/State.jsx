import React from 'react'
import { useState } from 'react'

const State = () => {
   const[count,setCount]= useState(9)

  return (

    <div>State
        <h1>{count}</h1>

        <button onClick={()=>setCount(count-1)}>adding </button>
    </div>
  )
}

export default State
