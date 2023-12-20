import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = async (e) => {
      e.preventDefault()
      try {
        await login(email, password)
        navigate("/")
      } catch (error) {
        alert("Login failed")
        setPassword("")
      }
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Username' value={email}  onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login