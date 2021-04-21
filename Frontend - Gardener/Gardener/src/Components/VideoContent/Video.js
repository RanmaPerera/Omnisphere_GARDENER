import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import './Video.css'
import PageBox from "../PageContent/PageBox";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function Video(){
    return(
        <div >
            <video className = 'bodyContain' src = 'PlantVideo.mp4' autoPlay loop muted></video> 

        
                <div className = "videoContent">
                    <h1>Welcome to Gardener !!!</h1>
                    <p>To plant a garden is to believe in tomorrow... </p>
                </div>
                <button className = "videoButton"
                  onClick  = "./PageBox.js">Explore</button>
                <div className = "Cards">
                <PageBox />
                {/* <Router>
                
                <Switch>  
            
            <Route exact path='/plant_suggestions' component={PlantSuggestions}/>
            <Route exact path='/disease_prevention' component={DeceasePrevention}/>
        
            
              <Route exact path='/disease_prevention' component={}/>
              <Route exact path='/journal' component={}/>
              <Route exact path='/blog' component={}/>
              <Route exact path='/register' component={}/>
            
            

          

           
             
              <Route exact path='/PageBox' component={PageBox}/> 
          

        </Switch>
        </Router> */}
              </div>
           
        </div>
    )
}


export default Video