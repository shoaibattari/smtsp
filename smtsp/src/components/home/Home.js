import React from 'react'
import Logo from '../logo/Logo'
import Login from "../login/Login"
import Signup from '../signup/Signup'

function Home() {

    return (


        <div style={{
            backgroundColor: "blue",
            textAlign: "right",
            padding: "10px",
        }}>
            <Logo />
            
            <button onClick={Login}>Login</button>
            <button onClick={Signup}>signup</button>
        </div>
    )
}


export default Home;