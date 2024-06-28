import React from 'react'

export default function Button(props) {
    const handleClick = ()=>{
        if (props.icon === -1) props.setCount(props.cnt - 1);
        if (props.icon === +1) props.setCount(props.cnt + 1);
    }
  return (
    <div>
        <button onClick={handleClick}>
                {props.icon}
        </button>
    </div>
  )
}
