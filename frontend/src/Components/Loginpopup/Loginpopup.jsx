import React, { useState } from 'react'
import './Loginpopup.css'
import {assets} from '../../assets/assets/assets'

const Loginpopup = ({setLogin}) => {
    const [currentState,setCurrentState] = useState("Sign Up")
  return (
    <div className='login-pop-up'>
        <form className="log-in-pop-up-container">
            <div className="log-in-title">
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} alt="" onClick={() => setLogin(false)} />
            </div>
            <div className="log-inp-pop-up-input">
                <input type="text" placeholder='Your Name' required />
                <input type="email" placeholder='Your E-Mail' required />
                <input type="password" placeholder='Your Password' required />
            </div>
            <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
            <div className="log-in-pop-up-condition">
                <input type="checkbox" required />
                <p>By Continuing, i agree to the term of use & privicy policy.</p>
            </div>
            {
                currentState === "Login" ?
                <p>Create a new account ? <span onClick={() => setCurrentState("Sign Up")}>Click hear</span></p>
                :  <p>Already have an account ? <span onClick={() => setCurrentState("Login")}>Login hear</span></p>
            }
        </form>
    </div>
  )
}

export default Loginpopup