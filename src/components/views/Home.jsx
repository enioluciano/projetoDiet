import React from 'react'
import '../css/Landing.css'
import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'

export default props=>
   
      <div id="landing" className="app" >
         <div className="container">

            <Logo />
            <Nav />
            <Main />
            <Footer />
            
         </div>

      </div>
   