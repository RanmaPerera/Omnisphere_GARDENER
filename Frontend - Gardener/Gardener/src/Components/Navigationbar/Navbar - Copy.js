import React, {Component} from 'react';
import { Menuitems } from './Menuitems'
import { Menuitems2 } from './Menuitems2'
import './Navbar.css';
import { Link } from 'react-router';

class Navbar extends Component{
    render(){
        return(
        <nav className = "NavItems">

            <div className = "ImgLogo">
                <img className = "Logo"src = "logoimage.png"></img>
            </div>

            <div className = "menu1">  
                    <ul className = "NavMenu">

                        {Menuitems.map((item,index)=> {
                        return(
                        <li key = {index}>
                            <a className = {item.Name} href = {item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                        })}

                    </ul>

            </div>

            <div className = "menu2"> 
                    
            <button className = "NavButton">Register</button>
            
                <div class="dropdownMenu">
                {/*<Link to="./LoginPage/LoginPg">Sign Up</Link> */}
                    <a href = "./LoginPage/LoginPg">Log In</a>
                </div>
                                
            </div>

         </nav>

        )   
    }
}

    export default Navbar;                                                     
