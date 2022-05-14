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
            
        <button style={{margin: "10px", padding: "10px",margin: "10px"}}onClick={Login}>Login</button>
        <button style={{margin: "10px", padding: "10px",margin: "10px"}}onClick={Signup}>Signup</button>
        </div>
    )
}


export default Home;