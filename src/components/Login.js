import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Login = () => {

    const navigate = useNavigate();

    const user = {
        email: "",
        password: ""
    }

    const loginUser = () => {
        axios.post('/api/login',user).then((res) => {
            console.log(res.data.data)
            navigate('/home')
        }) 
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="email" placeholder="Enter Email" /><br />
        <input type="password" placeholder='Enter password' /><br /><br />
        <button onClick={loginUser}>Login</button><button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}

export default Login