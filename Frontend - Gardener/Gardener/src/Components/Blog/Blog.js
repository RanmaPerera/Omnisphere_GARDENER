import React, {useRef} from 'react';
import './Blog.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


class Blog extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            title: "garden",
            
            
        };

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        console.log("District Selected!!");
        this.setState({ title: e.target.value });
    }

    handleSubmit(event) {
        alert('Your chosen district is: ' + this.state.title);
        event.preventDefault();
    }

  render(){
    
    return(
        

            <div className = "BlogContent">
                    
                <div className = "blogImg">
                    <img src = "BlogImg01.png"></img>
                    <h1>Gardener Blog</h1>
                    
                    
                </div>

                <div className = "blogImg_Box">
                    <div className = "Blog_post01">
                        <img src = "BlogImg02.jpeg"></img>
                        <div className = "postTitle">
                            {/* <p>{this.state.currentDate }</p> */}
                            <p>Proactive vs Reactive is the Successful Way to Garden</p>
                            <p>BY JOE LAMP'L</p>
                        </div>
                    </div>
                    <div className = "Blog_post01">
                        <img src = "BlogImg03.jpg"></img>
                        <div className = "postTitle">
                            {/* <p>{this.state.currentDate }</p> */}
                            <p>Proactive vs Reactive is the Successful Way to Garden</p>
                            <p>BY JOE LAMP'L</p>
                        </div>
                    </div>
                    <div className = "Blog_post01">
                        <img src = "BlogImg04.jpg"></img>
                        <div className = "postTitle">
                            {/* <p>{this.state.currentDate }</p> */}
                            {/* { title.map((One) => (
                            <p value={One[0]}><a onClick={() =>this.setState({plantValue: One[0]})}><Typography><span>{One[0]}</span></Typography></a></p>
                            ))} */}
                            <p>Proactive vs Reactive is the Successful Way to Garden</p>
                            <p>BY JOE LAMP'L</p>
                        </div>
                    </div>
                    
                </div>
                {/* <p3>Write your own post....</p3>
                <div className = "uploadPost">
                    
                <form  >
                    
                    

                    <div>
                        <TextField required id="standard-required" label="Required" defaultValue="Title" name={'Title'} value={this.state.title} onChange={this.handleChange} /> 
                        <TextField required id="standard-required" label="Required" defaultValue="Name" name={'Name'}  />
                        
                    </div>
                    <br></br>
                    <TextField 
                        id="outlined-multiline-flexible"
                        label="Write your post"
                        multiline
                        rowsMax={100}
                        
                        // onChange={handleChange}
                        variant="outlined"
                     />
                     <br></br>

                    <button className = "blogButton" type = "submit" >Submit Post</button>
                    
                </form>
                
                </div> */}

            
            </div>


        );
    }
}


export default Blog

