import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

import Services from './Services'
import Campaigns from './Campaigns'
import Referans from './Referans'
import SignUp from './SignUp'



function Routers() {
  return (
    <div>
<Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home
    />} />
 
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/services' element={<Services/>} ></Route>
    <Route path='/campaigns' element={<Campaigns/>} ></Route>
   
  <Route path='/referanslar'  element={<Referans/>}></Route>
  <Route path='/signup' element={<SignUp/>}></Route>
</Routes>



    </div>
  )
}

export default Routers