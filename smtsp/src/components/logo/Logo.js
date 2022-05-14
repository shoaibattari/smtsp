import React from 'react'
import companyLogo from '../logo/logo.png';




    function Logo() {
        return (
            <div>
                 <img style={{ 
                      float:'left',
                     width: "90px",
                 }} src={companyLogo} alt="logo"/>
            </div>
            
        )
    }


export default Logo;