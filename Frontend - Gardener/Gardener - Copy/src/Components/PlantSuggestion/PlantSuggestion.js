import React from 'react';
import './PlantSuggestion.css';
import Popup from 'reactjs-popup';
import { Button } from '@material-ui/core';

function PlantSuggestion(){
    return(

       <div>
        {/* Background Image */}
            <img src = "login.jpg"></img>

            <div className = "details">
                {/* District & Province Form */}
                <form className = "form">

                    <div className = "district">

                        
                            <label for="district"><strong>Choose a District :</strong></label>

                            
                            <select id="district" name="district">
                                <option value="Ampara">Ampara</option>
                                <option value="Anuradhapura">Anuradhapura</option>
                                <option value="Badulla">Badulla</option>
                                <option value="Batticaloa">Batticaloa</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Galle">Galle</option>
                                <option value="Gampaha">Gampaha</option>
                                <option value="Hambantota">Hambantota</option>
                                <option value="Jaffna">Jaffna</option>
                                <option value="Kalutara">Kalutara</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Kegalle">Kegalle</option>
                                <option value="Kilinochchi">Kilinochchi</option>
                                <option value="Kurunegala">Kurunegala</option>
                                <option value="Mannar">Mannar</option>
                                <option value="Matale">Matale</option>
                                <option value="Matara">Matara</option>
                                <option value="Moneragala">Moneragala</option>
                                <option value="Mullaitivu">Mullaitivu</option>
                                <option value="Nuwara Eliya">Nuwara Eliya</option>
                                <option value="Polonnaruwa">Polonnaruwa</option>
                                <option value="Puttalam">Puttalam</option>
                                <option value="Ratnapura">Ratnapura</option>
                                <option value="Trincomalee">Trincomalee</option>
                                <option value="Vavuniya">Vavuniya</option>

                            </select>
                    </div>
                    <div className = "province">
                        <label for="province"><strong>Choose a Province :</strong></label>
                        <select id="province" name="province" >
                            <option value="Central">Central</option>
                            <option value="Eastern">Eastern</option>
                            <option value="North Central">North Central</option>
                            <option value="Northern">Northern</option>
                            <option value="North Western">North Western</option>
                            <option value="Sabaragamuwa">Sabaragamuwa</option>
                            <option value="Southern">Southern</option>
                            <option value="Uva">Uva</option>
                            <option value="Western">Western</option>

                        </select>
                    </div>
                    {/* Pop up window for the plant list */}
                    <Popup trigger = { <button className= "psButton" type = "submit">Show Plants</button>}>
                        
                        <div class="plants"> 
                            <div class="plantContent animate" >
                                <h1>Plants for your Location</h1>
                                <div className = "plantList">

                                    <div class="plant1">1</div>
                                    <div class="plant2">2</div>
                                    <div class="plant3">3</div>  
                                    <div class="plant4">4</div>
                                    <div class="plant5">5</div>
                                    <div class="plant6">6</div>
                                    <div class="plant7">7</div>
                                    <div class="plant8">8</div>
                                    <div class="plant9">9</div>
                                    <div class="plant10">10</div>
                                    <div class="plant11">11</div>
                                    <div class="plant12">12</div>
                                    <div class="plant13">13</div>
                                    <div class="plant14">14</div>
                                    <div class="plant15">15</div>

                                </div>
                                        
                            </div>
                        </div>
                
                     </Popup>
                </form>
                
            </div>
            
        </div>     
        
    );
}

export default PlantSuggestion
