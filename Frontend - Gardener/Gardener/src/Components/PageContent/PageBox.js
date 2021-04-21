import { render } from '@testing-library/react';
import React from 'react';
import './PageBox.css'
import { Link } from 'react-router-dom'



class PageBox extends React.Component{

    // constructor(props) {
    //     super(props);
    //     this.state = {
           
    //         plantValue: "",
           
            
    //     };
    // }
    //     nextPath(path) {
    //         this.props.history.push({pathname: path, state: this.state.plantValue})
            
    //     }

render(){
    return(

    <div className = 'Fullcontent'>
        
                <p>Explore the beauty of nature...</p>
            
        <div className = 'content'>
            <div className = 'Box1'>
                <div className = 'BoxHeader'>
                    Plant Suggestions
                </div>
                <div className = 'image'>
                <img src ="card1.jpg"></img>
                </div>
                <div className = "BoxInfo">
                Give us your district and we will choose plants according to that it and more instructions will be given. Then select a plant 
                that you want to grow in your garden.

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
                Upload an image with your plant decease which can be clearly seen. Our system will figure out what 
                is that decease and then give you instructions to cure up your plant and prevent them as well.
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
                Give some time to read our articles in the blog. Our experts' articles will guide you with new trends and
                 technology in home gardening and helps you to recreate your garden in a beautiful way.
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
    
  
  );
}
}


export default PageBox

