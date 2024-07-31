import React from 'react'
import { Link } from 'react-router-dom'
import Topnavigation from './Topnavigation'

function Login() {
  return (
    
    <div className="App">
        <form>
         <h2>Login</h2>
            <div> 
                <label>E-mail</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
               <button type="button" >Login</button>
               <Link to="/Dashboard">Dash Board</Link>
            </div>

           
        </form>
        <br></br>
           <br></br>
           <Link to="/Signup">Sign Up</Link>
           
    </div>
  )
}

export default Login