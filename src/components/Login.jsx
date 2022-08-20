import React from 'react'
import {Link} from 'react-router-dom'
export const Login = () => {
  return (
    <div className="login-container">
    <form>
    <h1 style={{textAlign: 'center'}}>Login</h1>
    <hr style={{width: "250px", marginTop: "-25px"}}/>
    <label>
        Username: <input type="text"/> 
    </label>
    <label>
        Password: <input type="password"/> 
    </label>
    <button class="submit">Login</button>
    <Link to='/register'><p>I already have an account</p></Link>
    </form>
    </div>
  )
}

export default Login