import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Signup from './component/Signup'
import Login from './component/Login'
import UserSee from './component/UserSee'

import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
   const [user,setUser]=useState({})

  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Signup setUser={setUser}/>}/>
      <Route path='Login' element={<Login user={user}/>}/>
      <Route path='UserSee' element={<UserSee/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
