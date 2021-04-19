import { render } from '@testing-library/react';
import React from 'react';
import './PageBox.css'
import { Link } from 'react-router-dom'

function PageBox(){
    return(

    <div className = 'Fullcontent'>
        
                <p>Explore the beauty of nature...</p>
            
        <div className = 'content'>
            <div className = 'Box1'>
                <div className = 'BoxHeader'>
                    Plant Suggestions
                </div>
                <div className = 'image'>
                <Link to='/plant_suggestions'> <img src ="card1.jpg"></img></Link>
                </div>
                <div className = "BoxInfo">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </div>
            </div>

            <div className = 'Box2'>

                <div className = 'BoxHeader'>
                    Disease Prevention
                </div>
                <div className = 'image'>
                    <img src ="card2.jpg"></img>
                </div>
                <div className = "BoxInfo">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </div>
            </div>

            <div className = 'Box3'>

                <div className = 'BoxHeader'>
                    Blog
                </div>
                <div className = 'image'>
                    <img src ="card3.jpg"></img>
                </div>
                <div className = "BoxInfo">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </div>
            </div>
        </div>
        <div className = "Box4">
            <img src = "card4.jpg"></img>
            <div className = "ImgContent">
                <h1>Share your progress with <br></br> us and get suggestions to<br></br> beautify your garden... </h1>
                <button className = "ImgButton"
                  onClick  = "./PageBox.js">Start My Journal</button>
            </div>
            
        </div>

        

        

    </div>
    
  
  )
}


export default PageBox

