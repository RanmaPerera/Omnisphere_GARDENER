import React from 'react';
import './Footer.css';


function Footer(){
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
                        <h2>Social Media</h2>
                        <p>FaceBook</p>
                        <p>Instergarm</p>
                        <p>Twitter</p>
                        <p>YouTube</p>
                    </div>
                </div>
            </div> 
            <section className = 'social-media'>
                <div className = 'social-media-wrap'>
                    
                    <a href = "#" className = "social-logo">Gardener</a>
                    <small className = 'website-rights'>©Copyrights GARDENER2021S@OMNISPHERE SRILANKA.</small>
                    <div className = 'social-icons'>
                        {/* <Link className = 'social-icon-link facebook' to = '/' target = '_blank' aria-label = 'Facebook'>
                            <i className = 'fab fa-facebook-f'></i>
                        </Link> */}
                        <a href = "#" className = "social-icon-link facebook" to = '/' target = '_blank' aria-label = 'Facebook'>
                        <i class = 'fab fa-facebook'></i> 
                        </a>
                        {/* <Link className = 'social-icon-link instergram' to = '/' target = '_blank' aria-label = 'Instergram'>
                            <i className = 'fab fa-instergram-f'></i>
                        </Link> */}
                        <a href = "#" className = "social-icon-link instergram"  to = '/' target = '_blank' aria-label = 'Instergram'>
                        <i className = 'fab fa-instagram'></i>
                        </a>
                        {/* <Link className = 'social-icon-link twitter' to = '/' target = '_blank' aria-label = 'Twitter'>
                            <i className = 'fab fa-twitter-f'></i>
                        </Link> */}
                        <a href = "#" className = "social-icon-link twitter" to = '/' target = '_blank' aria-label = 'Twitter'>
                        <i className = 'fab fa-twitter'></i>
                        </a>
                        {/* <Link className = 'social-icon-link linkedin' to = '/' target = '_blank' aria-label = 'Linedin'>
                            <i className = 'fab fa-linkedin-f'></i>
                        </Link> */}
                        <a href = "#" className = "social-icon-link linkedin" to = '/' target = '_blank' aria-label = 'Linedin'>
                        <i className = 'fab fa-linkedin'></i>
                        </a>
                    </div>
                </div> 
            </section>  
        </div> 
    );
}

export default Footer;