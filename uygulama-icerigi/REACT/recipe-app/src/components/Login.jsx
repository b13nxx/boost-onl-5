import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {login} = useContext(AuthContext)

    const navigate = useNavigate()



    const handleLogin = async ( event) => {
      event.preventDefault()
      try {
        await login(username, password)
        navigate('/')
      } catch (error) {
        alert('Login Failed')
      }
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Username' value={username}  onChange={e => setUsername(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login