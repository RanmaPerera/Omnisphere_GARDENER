import React from 'react';
import './DeceasePrevention.css';
import axios from 'axios';
import Popup from 'reactjs-popup';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { BsXCircle } from "react-icons/bs";

class DeceasePrevention extends React.Component {

    //API Calls

    constructor() {
        super();
        this.state = {
          isOpen: false
        };                 
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
        Plant: "",
        Disease_Name: "",
        Plant_Name:"",
        Tag: "",
        Health: "",
        Guideline1: "",
        Guideline2: "",
        Guideline3: "",
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
        axios.post('http://127.0.0.1:8080/uploadfile/', fd)
            .then(res => {
                console.log(res);
                const condition = res.data.predict;
                const fileName = res.data.filename;
                this.setState({ condition, haveData: true, fileName,isLoading:false })

                this.getDisease();

            });
    }

    getDisease() {
        fetch("http://127.0.0.1:5000/newDiseaseDetails/" + this.state.condition)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    const Disease_Name = result.Disease_Name;
                    const Plant_Name = result.Plant_Name;
                    const Health = result.Health;
                    const Tag = result.Tag;
                    const Guideline1 = result.Guideline1;
                    const Guideline2 = result.Guideline2;
                    const Guideline3 = result.Guideline3;

                    
                    this.setState({Disease_Name,Plant_Name,Health,Tag,Guideline1,Guideline2,Guideline3})
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

                <img src = "DiseasePreventionImg.jpg" className = "diseaseImg"></img>

                <p><center>Gardener Disease Prevention System</center></p>
                <center><input type='file' onChange={this.fileSelectedHandler}></input></center>
                <center><button className = "disease_button" onClick={this.fileUploadHandler}>Upload</button></center>
                
                //Loader
                {this.state.isLoading ? <div><center><Loader className = "loader"
                                                        type="ThreeDots"
                                                        color="white"
                                                        height={70}
                                                        width={70}
                                                    /></center></div>:null}
                {this.state.haveData ?
                    <center>
                       <p className = "results">View your results..</p>
                        <Popup trigger={<button className = "disease_button2"  onClick={this.showResults}>Show results</button>}
                        on = 'click'  open={this.state.isOpen} onOpen={this.handleOpen}>

                            <div className="disease_details">
                                <div className="disease_content animate">
                                    <div className="detail_disease">
                                        <BsXCircle className = "icon" onClick = {this.handleClose}/>
                                        
                                        <h1>Entered Image: </h1> <br></br>
                                        <p>{this.state.fileName}</p><br></br>
                                        <h1>Health Condition : </h1> <br></br>
                                        <p>{this.state.Health}</p><br></br>
                                        <h1>Disease Name : </h1><br></br>
                                        <p>{this.state.Tag}</p><br></br>
                                        <h1>Identified Plants : </h1> <br></br>
                                        <p>{this.state.Plant_Name}</p><br></br>
                                        <h1>Prevention Strategies : </h1><br></br>
                                        <p>{this.state.Guideline1}</p>
                                        <p>{this.state.Guideline2}</p>
                                        <p>{this.state.Guideline3}</p>
                                    </div>
                                </div>
                            </div>
                        </Popup></center>: null}




                
            </div>


        );
    }
}






export default DeceasePrevention