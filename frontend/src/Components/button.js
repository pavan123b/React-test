import React from 'react'

export default function Button() {
    const handleClick = ()=>{
        alert("Hello World");
    }
  return (
    <div>
        <button onClick={handleClick}>
                click
        </button>
    </div>
  )
}
