//import './Main.css'
import React from 'react'
import {Link} from 'react-router-dom'

import '../css/Landing.css'


export default props =>
    <React.Fragment>
        <main className="gender-description">
            Select your gender:
        </main>
        <div className="gender-buttons">
            <Link to="/pagina"> <button className="btn btn-female" data-gender="female">
                <span className="icon">
                    <i className="female"></i>
                </span>
                Men Click here
                <i className="forward-female forward"></i>
            </button>
            </Link>

            <Link to="/pagina">
                <button className="btn btn-male" data-gender="male">
                    <span className="icon">
                        <i className="male"></i>
                    </span>
                    Men Click here
                <i className="forward-male forward"></i>
                </button>
                <div className="gender-disclaime"></div>
            </Link>
        </div>

    </React.Fragment>