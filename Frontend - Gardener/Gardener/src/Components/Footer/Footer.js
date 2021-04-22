import React from 'react';
import './Footer.css';
import { useHistory } from 'react-router-dom';


function Footer(){

    const history = useHistory();
    return(
        <div className = 'footer-container'>
            
            <div className = 'footer-links'>
                <div className = 'footer-link-wrapper'>
                    <div className = 'footer-link-items'>
                        <h2>About us</h2>
                       <p>How this works</p>
                        <p>Careers</p>
                        <p>Term of Services</p>
                    </div>
                    <div className = 'footer-link-items'>
                        <h2>Contact Us</h2>
                        <p>Contact</p>
                        <p>Support</p>
                        <p>Sponsorships</p>
                    </div>
                    <div className = 'footer-link-items'>
                        <h2>Quick Links</h2>
                        <p onClick={()=> history.push("/plant_suggestions")}>Plant Suggestions</p>
                        <p onClick={()=> history.push("/disease_prevention")}>Dicease Prevention</p>
                        <p onClick={()=> history.push("/journal")}>Journal</p>
                        <p onClick={()=> history.push("/blog")}>Blog</p>
                    </div>

                </div>

            </div> 

            <section className = 'social-media'>

                <div className = 'social-media-wrap'>
                   
                    <div className = 'social-icons'>

                        <a href = "#" className = "social-icon-link facebook" to = '/' target = '_blank' aria-label = 'Facebook'>
                        <i class = 'fab fa-facebook'></i> 
                        </a>
                       
                        <a href = "#" className = "social-icon-link instergram"  to = '/' target = '_blank' aria-label = 'Instergram'>
                        <i className = 'fab fa-instagram'></i>
                        </a>
                       
                        <a href = "#" className = "social-icon-link twitter" to = '/' target = '_blank' aria-label = 'Twitter'>
                        <i className = 'fab fa-twitter'></i>
                        </a>
                       
                        <a href = "#" className = "social-icon-link linkedin" to = '/' target = '_blank' aria-label = 'Linedin'>
                        <i className = 'fab fa-linkedin'></i>
                        </a>

                    </div>

                    <div className='copyRightSection'><small className = 'website-rights'>©Copyrights_GARDENER2021@OMNISPHERE_SRI-LANKA.</small></div>

                    <div className='gardenerName'><a href = "#" className = "social-logo">Gardener</a></div>

                </div> 
            </section>  
        </div> 
    );
}

export default Footer;