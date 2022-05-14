import React from 'react'
import Logo from '../logo/Logo'



function Home() {

    return (


        <div style={{
            backgroundColor: "blue",
            textAlign: "right",
            padding: "10px",
        }}>
            <Logo />

            <button style={{ margin: "10px", padding: "10px", margin: '21px', borderRadius: '10px' }}>Login</button>
            <button style={{ margin: "10px", padding: "10px", margin: '21px', borderRadius: '10px' }}>sign up</button>
        </div>
    )
}


export default Home;