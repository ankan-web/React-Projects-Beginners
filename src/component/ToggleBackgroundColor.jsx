import React, { useState } from 'react'
import "../style.css"
const ToggleBackgroundColor = () => {
  const [backgroundColor, setbackgroundColor] = useState('white');

  const [textColor , setTextColor] = useState('#1b1b1b');

  const [buttonStyle , setButtonStyle] = useState("white");


  const handleClick = ()=>{
    setbackgroundColor(backgroundColor === '#1b1b1b' ? 'white' : '#1b1b1b');

    setTextColor(textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b');

    setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white');
  }


  return (
    <div style={{backgroundColor, color: textColor}}>
      <button onClick={()=> handleClick()} style={{buttonStyle , color: textColor , border:`2px solid ${textColor}`}}>
        {backgroundColor === '#1b1b1b' ? 'Black Theme' : 'White Theme'}
      </button>
      <section className="content">
        <h1>Welcome to my Project <br />
        </h1>
      </section>
    </div>
  )
}

export default ToggleBackgroundColor
