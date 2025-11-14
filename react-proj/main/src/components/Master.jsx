import React from 'react'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
import {Route , Routes} from "react-router-dom"

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
            <Route path='/edit/:userid' element={<Edit></Edit>}></Route>
        </Routes>
    </div>
  )
}

export default Master