import React from 'react';
import './DeceasePrevention.css';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import Popup from 'reactjs-popup';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { BsXCircle } from "react-icons/bs";

class DeceasePrevention extends React.Component {

    constructor() {
        super();
        this.state = {
          isOpen: false
        };                  // state to control the state of popup
      }
      
      handleOpen = () => {
        this.setState({ isOpen: true });
      }
      
      handleClose = () => {
        this.setState({ isOpen: false });
      }

    state = {
        selectedFile: {},
        condition: "",
        fileName: "",
        Disease: "",
        Guide1: "",
        Guide2: "",
        Guide3: "",
        Plant: "",
        haveData: false,
        isLoading:false,
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        this.setState({ isLoading: true })
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.post('https://plant-amila-f.herokuapp.com/uploadfile/', fd)
            .then(res => {
                console.log(res);
                const condition = res.data.predict;
                const fileName = res.data.filename;
                this.setState({ condition, haveData: true, fileName,isLoading:false })

                this.getDisease();

            });
    }

    getDisease() {
        fetch("http://127.0.0.1:5000/diseaseDetails/" + this.state.condition)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    const  Disease =result.Disease;
                    const Guide1 =result.Guide1;
                    const Guide2 =result.Guide2;
                    const Guide3 =result.Guide3;
                    const Plant =result.Plant;

                    this.setState({Disease,Guide1,Guide2,Guide3,Plant})
                },

                (error) => {
                    console.log("error");
                }
            )
    }

    showResults = () => {
        console.log("Hello")
    }

    render() {
        return (

            <div className="disease_background">

                <p><center>Upload a image of the disease</center></p>
                <center><input type='file' onChange={this.fileSelectedHandler}></input></center>
                <center><button className = "disease_button" onClick={this.fileUploadHandler}>Upload</button></center>
                
                {this.state.isLoading ? <div><center><Loader
                                                        type="ThreeDots"
                                                        color="#001a00"
                                                        height={70}
                                                        width={70}
        
                                                    /></center></div>:null}
                {this.state.haveData ?
                    <center>
                       <p className = "results">View your results..</p>
                        <Popup trigger={<button className = "disease_button"  onClick={this.showResults}>Show results</button>}
                        on = 'click'  open={this.state.isOpen} onOpen={this.handleOpen}>

                            <div className="disease_details">
                                <div className="disease_content animate">
                                    <div className="detail_disease">
                                    <BsXCircle className = "icon" onClick = {this.handleClose}/>
                                        <h1>Entered Image: </h1> <br></br>
                                        <p>{this.state.fileName}</p>
                                        <h1>Plant Condition : </h1> <br></br>
                                        <p>{this.state.condition}</p>
                                        <h1>Disease Name : </h1> <br></br>
                                        <p>{this.state.Disease}</p>
                                        <h1>Affected Plants : </h1> <br></br>
                                        <p>{this.state.Plant}</p>
                                        <h1>Prevention Strategies : </h1><br></br>
                                        <p>{this.state.Guide1}</p>
                                        <p>{this.state.Guide2}</p>
                                        <p>{this.state.Guide3}</p>
                                    </div>
                                </div>
                            </div>
                        </Popup></center>
                    : null}




                <div className="upload">


                </div>
            </div>


        );
    }
}






export default DeceasePrevention