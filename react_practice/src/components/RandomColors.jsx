import React, { useRef, useState, useEffect } from 'react'

function RandomColors() {

  const [color, setColor] = useState({
    red : 0,
    green: 0,
    blue: 0
  })

  const colorRef = useRef();

  useEffect(()=>{ 
    colorRef.current.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`;
  },[color])

  function handleColor(e){
    setColor({...color, [e.target.name]:Math.floor(Math.random() * 255)})
  }

  return (
    <div className='center' ref={colorRef}>
      <div className={(color.red <= 50 && color.green <=50) || (color.red <=50 && color.blue <=50) || 
        (color.green <=50 && color.blue <=50) ? "text-white" : "text-black" }>
        <h1>{`rgb(${color.red}, ${color.green}, ${color.blue})`}</h1>
      </div>
      <div>
        <button name='red' onClick={handleColor}>Red</button>
        <button name='green' onClick={handleColor}>Green</button>
        <button name='blue' onClick={handleColor}>Blue</button>
      </div>
    </div>
  )
}

export default RandomColors