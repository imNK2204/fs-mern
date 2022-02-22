import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate()

    const user = {
        username: "",
        email: "",
        password: "",
        phone: ""
    }

    const registerUser = () => {
        axios.post("/api/register",user).then((res) => {
            console.log(res.data)
            navigate('/')
        })
    }
  return (
    <div>
        <h1>Register</h1>
        <input type="text" placeholder="Enter Username" onChange={(e) => (user.username = e.target.value)} /><br />
        <input type="email" placeholder="Enter Email id" onChange={(e) => (user.email = e.target.value)} /><br />
        <input type="password" placeholder="Enter Password" onChange={(e) => (user.password = e.target.value)} /><br />
        <input type="text" placeholder='Enter Phone' onChange={(e) => (user.phone = e.target.value)} /><br /><br />
        <button onClick={registerUser}>Register</button><button onClick={() => navigate('/')}>Login</button>
    </div>
  )
}

export default Register