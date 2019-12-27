//import './App.css'
import React from 'react'
import '../components/css/Landing.css'

import {HashRouter} from 'react-router-dom'

import Routes from './Routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props=>
   <HashRouter>
      <div id="landing" className="app" >
         <div className="container">

            <Logo />
            <Nav />
            <Main />
            <Routes />
            <Footer />
         </div>

      </div>
   </HashRouter>