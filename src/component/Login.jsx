import { Navigate, useNavigate,Link } from 'react-router-dom'
import React, { useState,useRef } from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';



function Login(props) {
// const [username,setusername]=useState("")
// const [userpassword,setuserpassword]=useState("")
const navigate=useNavigate()
const usernameRef=useRef()
const userpasswordaRef=useRef()


 function submit(){
   
  
    if(usernameRef.current.value==props.user.name){
        if(userpasswordaRef.current.value==props.user.pass){
          navigate("/UserSee")
        }else{
           alert("login invalied")
        }
    }else{
           alert("login invalied")
    }
 }

  return (
    <Box>
     <h1>Login</h1>
        <input type="text" placeholder='username' ref={usernameRef} style={{
          color:`red`,
          backgroundColor:"black"
       }}/><br />
        <input type="text" placeholder='enter password' ref={userpasswordaRef}/><br />
          <Input/><br />
          <Button variant="text">Text</Button><br />
          <Button variant="contained">Contained</Button><br />
      <Button variant="outlined">Outlined</Button><br />
        <button onClick={submit} >Login</button><br />
        <Link to="/">
            <button>back</button>
        </Link>
    </Box>
  )
}

export default Login