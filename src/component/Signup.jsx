
import { Link,useNavigate } from 'react-router-dom'
import React, { useState ,useRef} from 'react'




function Signup(props) {
    // const [name, setname] = useState("")
    // const [Pass, setpass] = useState("")
  const nameRef=useRef()
  const passRef=useRef()
  const navigate=useNavigate()


    function submit() {
        let obj = { name:nameRef.current.value, pass:passRef.current.value}
        props.setUser(obj)
        navigate("/login")
      
    }
    return (
        <div>
            <h1>Signup</h1>
            <input type="text" placeholder='Enter Name' ref={nameRef}/><br />
            <input type="text" placeholder='create password' ref={passRef}/><br />
            <button onClick={submit}> Signup</button>
            <Link to="Login"><button>LOgin</button></Link>
        </div>
    )
}

export default Signup