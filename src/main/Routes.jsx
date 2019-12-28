import React from 'react'
import Home from '../components/views/Home'
import Pagina from '../components/views/Pagina' 
import { Switch, Route} from 'react-router-dom'



export const Router = () =>{
    return(
        

        <Switch>
                 <Route path="/" component={Home} exact />
                 <Route path="/pagina" component={Pagina} />
                 <Route component={() => <div>pagina</div>} />
        </Switch>

    );
};