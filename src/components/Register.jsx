import React from 'react'
import {Link} from 'react-router-dom'

export const Register = () => {
  return (
    <div className="register-container">
    <form>
    <h1 className="register-title" style={{textAlign: 'center'}}>Register</h1>
    <hr style={{width: "500px", marginTop: "-25px"}}/>
        <fieldset>
    <label>
        Username: <input type="text"/> 
    </label>
    <label>
        E-mail: <input type="email"/> 
    </label>
    <label>
        Password: <input type="password"/> 
    </label>
    <label>
        Confirm password: <input type="password"/> 
    </label>
    </fieldset>
    <label>Do you want to participate in fit battles?
        <select name="Yes">
            <option value="y">Yes</option>
            <option value="n">No</option>
        </select>
    </label>
    <label>Do you want to participate in (and be notified about) competitions?
        <select name="Yes">
            <option value="y">Yes</option>
            <option value="n">No</option>
        </select>
    </label>
    <fieldset>
    <label> By registering, I agree to the Terms of Service and Privacy Policy. <input type="radio" id="tos-agree" required/></label>
    </fieldset>
    <button class="submit">Register</button>
    <Link to="/login" style={{marginTop: '-40px'}}><p>I already have an account</p></Link>
    </form>

    </div>
  )
}

export default Register