import React, { useState } from 'react'

export default function Counter() {
    const[counter,setCounter]  = useState(0)
  return (
<>
    <h1 className='text-center font-bold'>Counter App </h1>
    <h3 className='text-center pt-4'>{counter}</h3>
    <div className="counter pt-4 text-center">
     <button onClick={()=>setCounter(counter+1)} style={{backgroundColor:'black',color:'white',padding:'5px',border:'1px solid black',}} >Increment</button>
     <button onClick={()=>setCounter(counter-1) } style={{backgroundColor:'black',color:'white',padding:'5px',border:'1px solid black',margin:'10px'}} >Decrement</button>
    </div>
</>
  )
}
