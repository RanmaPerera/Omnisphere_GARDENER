import React from 'react';
import './Blog.css';


class Blog extends React.Component{


    constructor() {

        super();

        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
        this.state = {currentDate: date}

    }
    
     render(){
    
        return(
            

            <div className = "BlogContent">
                    
                <div className = "blogImg">
                    <img src = "BlogImg01.png"></img>
                    <h1>Gardener Blog</h1>
                    <p>{this.state.currentDate }</p> 
                    
                    
                </div>
                {/* -------Post-------- */}
                <div className = "blogImg_Box">
                    <div className = "Blog_post01">
                        <a onClick= {() => window.location.href = "https://www.growingagreenerworld.com/proactive-vs-reactive-is-the-successful-way-to-garden/"}><img src = "BlogImg02.jpeg"></img></a>
                        <div className = "postTitle">
                            
                            <p>Proactive vs Reactive is the Successful Way to Garden</p>
                            <p>BY JOE LAMP'L</p>
                        </div>
                    </div>
                    {/* -------Post-------- */}
                    <div className = "Blog_post01">
                    <a onClick= {() => window.location.href = "https://joegardener.com/video/how-to-top-tomatoes-what-to-do-when-tomato-plants-get-too-tall/"}><img src = "BlogImg03.jpg"></img></a>
                        <div className = "postTitle">
                            
                            <p>How to Top Tomatoes – What to do When Tomato Plants Get Too Tall</p>
                            <p>BY JOE LAMP'L</p>
                        </div>
                    </div>
                    {/* -------Post-------- */}
                    <div className = "Blog_post01">
                    <a onClick= {() => window.location.href = "https://www.growingagreenerworld.com/greatest-gardens/"}><img src = "BlogImg04.jpg"></img></a>
                        <div className = "postTitle">
                        
                            <p>The Greatest Gardens Start With a Single Plant</p>
                            <p>BY JOE LAMP'L</p>
                        </div>
                    </div>
                    
                </div>
                

            
            </div>


        );
    }
}


export default Blog

