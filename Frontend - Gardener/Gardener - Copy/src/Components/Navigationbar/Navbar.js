import React, {Component, useState} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Axios from "axios";  //to perform the ajax requests



function Navbar() {

    

        const[UserName,setUserName] = useState(' ')
        const[Email,setEmail] = useState(' ')
        const[Password,setPassword] = useState(' ')
        const[Confirm_Password,setConfirm_Password] = useState(' ')

        const Sign_In = () => {
            Axios.post('http://localhost3000/Sign_In',{
                UserName:UserName,
                Email : Email,
                Password : Password,
                Confirm_Password : Confirm_Password,

            });
        }

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
                    <li><Link to='/journal'>Journal</Link></li> 
                    <li><Link to='/blog'>Blog </Link></li> 
                     
                </ul>
            </div> 

                <div class="dropdown">
                    <Link to='/register' >
					    <a onclick="myFunction()" class="dropbtn">Register</a>
                    </Link> 
                        <div class="dropdown-content">
                            {/*Pop up window*/}
                            <Popup trigger={<a >Log In</a>}>
                            <div id="id01" className="modal"> 
                                    <form className="modal-content animate" action="/action_page.php" method="post">
                                        <div class="imgcontainer">
                                            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                                        </div>
                    
                                        <div class="container">
                                            <p>Log In</p> <br></br>
                                            <label for="uname"><b>Username :</b></label>
                                            <input type="text" placeholder="Enter Username" name="uname" required></input><br></br>
                                            <label for="psw"><b>Password :</b></label>
                                            <input type="password" placeholder="Enter Password" name="psw" required></input>
                                            <button type="submit" className = "login">Login</button>
                                            <span class="psw">Forgot <a href="#">password?</a></span>
                                        </div>
                                    </form>
                                </div>
                            </Popup>

                            <Popup trigger={<a >Sign In</a>}>
                                <div id="id02" class="modal2"> 
                                     <form class="modal-content2 animate">              {/*action="/action_page.php" */}
                                        
                    
                                        <div class="container2">
                                            <p>Sign In</p> 
                                            <div class="imgcontainer">
                                            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
                                        </div>
                                            <label for="psw"><b>Email :</b></label>
                                            <input type="email" placeholder="Enter Email" name="email" onChange = {(e) => {setEmail(e.target.value)}} required></input><br></br>
                                            <label for="uname"><b>Username :</b></label>
                                            <input type="text" placeholder="Enter Username" name="uname" onChange = {(e) => {setUserName(e.target.value)}} required></input><br></br>
                                            <label for="psw"><b>Password :</b></label>
                                            <input type="password" placeholder="Enter Password" className="psw1" onChange = {(e) => {setPassword(e.target.value)}} required></input><br></br>
                                            <label for="psw" className="confirmPsw" ><b>Confirm Password :</b></label>
                                            <input type="password" placeholder="Enter Password" className="psw2" onChange = {(e) => {setConfirm_Password(e.target.value)}} required></input>
                                            <button onClick= {Sign_In} type="submit" className = "signin">SignIn</button>
                                        </div>
                                    </form>
                                </div>
                            </Popup>
                    
                     </div>
                </div>
                
        </div> 
                   

     );}


    export default Navbar;                                                     
