//import './Footer.css'
import '../css/Landing.css'

import React from 'react'
import footerLogo from '../../assets/img/single-color-logo.svg'

export default props=>
<footer className="footer row">
    
        <div className="col-xs-6 links col-lg-4">
            <a href="/blog">Blog</a>
            <a href="/faq">F.A.Q</a>
            <a href="/myplan"><strong>Acess my plan</strong></a>
            <a href="/reviews">Reviews</a>
            <a href="/general-conditions">General conditions</a>
            <a href="/data-protection-policy">Data protection policy</a>
            <a href="/contact">Contact us</a>            
        </div>
        <div className="col-xs-6 col-lg-4">
            <img src={footerLogo} className="footer-logo" alt="footer-logo" />
        </div>

        <div className="col-xs-12 col-lg-4 copyright">
                2019  © all rights reserveds
            <div className="disclaimer">
                    DISCLAIMER: RESULTS MAY VARY FROM PERSON TO PERSON. OUR SERVICE IS NOT INTENDED TO DIAGNOSE,
                    TREAT, CURE OR PREVENT ANY DISEASE AND DOES NOT CONSTITUTE MEDICAL ADVICE.
            </div>
        </div>

       

    
</footer>