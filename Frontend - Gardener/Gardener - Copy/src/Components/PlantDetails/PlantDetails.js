import React from 'react';
import './PlantDetails.css';

function PlantDetails(){
    return(
        <div className = 'detailContent'>

             {/* Background Image */}
             <img src = "plantDetailbg.jpg" className = 'detailsBg'></img>


            <h1 className = 'plantName'>... Plant Name ...</h1>

            
            <div className = 'detailsRequired'>

                <li>Plant Name : </li>
                <li>Required field size : </li>
                <li>Soil preperation of the field : </li>
                <li>Space between each plant : </li>
                <li>Depth of each hole : </li>
                <li>Seed requirement : </li>
                <li>Seeds per hole : </li>
                <li>Water supply for the field : </li>
                <li>Suitable fertilizers : </li>
                <li>Fertilizer requirement : </li>
                <li>Sunlight requirement : </li>
                <li>Weed management : </li>
            </div>

            <div className = 'plantImg'>
                <img src = 'tomato.jpg' className = 'plantImage'></img>
            </div>

            

        </div>
    );
}


export default PlantDetails;