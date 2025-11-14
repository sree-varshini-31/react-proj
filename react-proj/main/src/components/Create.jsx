import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Create = () => {
     let [id , setId] = useState('')
    let [username , setUsername] = useState('')
    let [name , setName] = useState('')
    let [email , setEmail] = useState('')
    let [phone , setPhone]= useState('') 
    let [website , setWebsite] = useState('')
    let [address , setAddress] = useState('')
    let [company , setCompany] = useState('')


     let navigate = useNavigate()

    let fetchData = (e) => {
        e.preventDefault()
        console.log({id , username , name , email , phone , website , address , company});
         let payload = {
            id,
            username,
            name ,
            email,
            phone,
            website,
            address,
            company
            
        }
        axios.post(`http://localhost:8080/users`,payload)
        .then(() => {
            console.log("data created successfully");
            navigate("/")
        })
        .catch(() => {
            console.log("data not created");
            
        })
   
    }
  return (
    <div>
     
       <form action="">
            <table class="border border-info">
                <tr>
                    <td> <label htmlFor="id">ID :</label></td>
                    <td> <input type="tel" name="id" id="id" onChange={(e) => {setId(e.target.value)}} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="username">Username: </label></td>
                    <td> <input type="text" name="username" id="username" onChange={(e) => {setUsername(e.target.value)}}/></td>
                </tr>
                 <tr>
                    <td>  <label htmlFor="name">Name: </label></td>
                    <td><input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/></td>
                </tr>
                 <tr>
                    <td> <label htmlFor="email">Email: </label></td>
                    <td> <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/></td>
                </tr>
                 <tr>
                    <td>  <label htmlFor="phone">Phone: </label></td>
                    <td><input type="number" name="phone" id="phone" onChange={(e) => {setPhone(e.target.value)}}/></td>
                </tr>
                 <tr>
                    <td><label htmlFor="website">Website: </label></td>
                    <td><input type="text" name="website" id="website" onChange={(e) => {setWebsite(e.target.value)}}/></td>
                </tr>
                 <tr>
                    <td> <label htmlFor="address">Address: </label></td>
                    <td><input type="text" name="address" id="address" onChange={(e) => {setAddress(e.target.value)}}/></td>
                </tr>
                 <tr>
                    <td> <label htmlFor="company">Company: </label></td>
                    <td> <input type="text" name="company" id="company" onChange={(e) => {setCompany(e.target.value)}}/></td>
                </tr>
           
         
            <button onClick={fetchData}>submit</button>
            </table>
        </form>
    </div>
  )
}

export default Create