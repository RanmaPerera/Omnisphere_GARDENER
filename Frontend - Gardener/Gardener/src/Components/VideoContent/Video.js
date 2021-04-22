import React from 'react'
import './Video.css'
import PageBox from "../PageContent/PageBox";
import { useHistory } from 'react-router-dom';



function Video(){

    const history = useHistory();
    return(
        <div >
            <video className = 'bodyContain' src = 'PlantVideo.mp4' autoPlay loop muted></video> 

        
                <div className = "videoContent">
                    <h1>Welcome to Gardener !!!</h1>
                    <p>To plant a garden is to believe in tomorrow... </p>
                </div>
                //directing to the middle content
                <button className = "videoButton"
                  onClick={()=> history.push("/PageBox")}>Explore</button>
                <div className = "Cards">
                <PageBox />
               
              </div>
           
        </div>
    )
}


export default Video