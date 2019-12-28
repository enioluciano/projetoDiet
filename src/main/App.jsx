//import './App.css'
import React from 'react'
import '../components/css/Landing.css'
import Home from '../components/views/Home'
import Pagina from '../components/views/Pagina'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export default props=>
   
   <BrowserRouter>
      <Switch>
         <Route path="/" component={Home} exact />
         <Route path="/pagina" component={Pagina} />
         <Route component={() => <div>pagina</div>} />
      </Switch>
   </BrowserRouter>
  