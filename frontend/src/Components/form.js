import React, { useState } from 'react'

export default function Form() {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleEmail = (e)=>{
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") alert("Please Enter Email")
        if (pass === "") alert("Please Enter Password")
        console.log(`Email : ${email}, Password : ${pass}`);
    }
  return (
    <div>
        <form >
              Email
              <input onChange={handleEmail}></input>
              Password
              <input onChange={handlePass}></input>
              <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
