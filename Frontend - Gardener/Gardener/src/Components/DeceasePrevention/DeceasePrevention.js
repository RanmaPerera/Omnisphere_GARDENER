import React from 'react';
import './DeceasePrevention.css';
import ImageUploader from 'react-images-upload';
import axios from 'axios';
import Popup from 'reactjs-popup';

class DeceasePrevention extends React.Component {

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

            <div className="background">

                <p><center>Gardener - Disease Prevention System</center></p>
                <center><input type='file' onChange={this.fileSelectedHandler}></input></center>
                <center><button onClick={this.fileUploadHandler}>Upload</button></center>
                {/* {this.state.isLoading ? <div><center><h1>Loading ..</h1></center></div>:null} */}
                {this.state.isLoading ? <div><center><h1>Loading ..</h1></center></div>:null}
                {this.state.haveData ?
                    <center>
                        <Popup trigger={<button onClick={this.showResults}>Show results</button>}>

                            <div className="disease_details">
                                <div className="disease_content animate">
                                    <div className="detail_disease">
                                        <h1>Entered Image: </h1> <br></br>
                                        <p>{this.state.fileName}</p><br></br>
                                        <h1>Plant Condition : </h1> <br></br>
                                        <p>{this.state.condition}</p><br></br>
                                        <h1>Disease Name : </h1> <br></br>
                                        <p>{this.state.Disease}</p><br></br>
                                        <h1>Affected Plants : </h1> <br></br>
                                        <p>{this.state.Plant}</p><br></br>
                                        {/* <p>Brinjal</p><br></br>
                                        <p>Okra</p><br></br> */}
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


                    {/* <ImageUploader 
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                maxFileSize={5242880}
            /> */}
                </div>
            </div>


        );
    }
}




// constructor(props) {
//     super(props);
//      this.state = { pictures: [] };
//      this.onDrop = this.onDrop.bind(this);
// }

// onDrop(picture) {
//     this.setState({
//         pictures: this.state.pictures.concat(picture),
//     });
// }


// function DeceasePrevention(){
//     return(

//         <div>
//         <div className = "background">
//         <p>Upload a image of the decease for more suggestions...</p>
//         </div>
//             <div className = "details">




//         </div>   
//         </div>  

//     );
// }

export default DeceasePrevention