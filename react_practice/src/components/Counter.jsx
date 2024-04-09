import React, { useEffect, useRef, useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  const divRef = useRef();

  useEffect(()=>{
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    divRef.current.style.backgroundColor = `rgb(${red},${green},${blue})`;
  },[count])


  function counter(){
  setCount(count+1);
  }

  return (
    <div ref={divRef} className='center'>
      <h1>{count}</h1>
      <button onClick={counter}>Click ME</button>
    </div>
  )
}

export default Counter