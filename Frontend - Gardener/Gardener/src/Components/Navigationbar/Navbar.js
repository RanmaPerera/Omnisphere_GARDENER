import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import 'reactjs-popup/dist/index.css';




function Navbar() {

    return(
        <div className = "NavItems">

            <div className = "ImgLogo">
                <img className = "Logo"src = "logoimage.png"></img>
            </div>

            <div className = "NavMenu"> 
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/plant_suggestions'>< a>Plant Suggestions</a></Link></li>
                    <li><Link to='/disease_prevention'>Disease Prevention</Link></li>
                    <li><div class="dropdown01">
                        
                            <a onclick="myFunction()" class="dropbtn2">Journal</a>
                                <div class="dropdown-content">
                                    <a><Link to='/journal'> Start Journal</Link></a>
                                    <a>My Journals</a>
                                </div>
                    </div></li>
                    <li><Link to='/blog'>Blog </Link></li> 
                     
                </ul>
            </div> 

                <div class="dropdown">
                    <Link to='/register' >
					    <a onclick="myFunction()" class="dropbtn">Log Out</a>
                    </Link> 
                       

                </div>
                
        </div> 
                   

     );}


    export default Navbar;  