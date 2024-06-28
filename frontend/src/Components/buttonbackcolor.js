import { useState } from "react";
import React from 'react'


export default function Buttonbackcolor() {
    const [color,setColor]= useState(0);
    const handleClick = ()=>{
        if(color===0)setColor(1);
        else setColor(0);
    }

  return (
    <div>
          <button onClick={handleClick} 
          //style={color ? backgroundcolor = red:backgroundcolor = white}
          >
                Changes color
        </button>
    </div>
  )
}
