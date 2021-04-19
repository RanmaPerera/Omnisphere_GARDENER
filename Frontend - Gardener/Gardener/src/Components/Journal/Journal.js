import React from "react"
import Popup from "reactjs-popup"
import './Journal.css'
import { BsXCircle } from "react-icons/bs";

class journal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            plantName: "",
            isOpen: false
        };
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
      }
      
      handleClose = () => {
        this.setState({ isOpen: false });
      }

    nextPath(path) {
        this.props.history.push({pathname: path, state: this.state.plantName})
        
    }   

    render(){
        const{plantName} = this.state;
       
         return(

            <div className = "journal_body">
              

                <div className = "plant_image">
                    <img src = "brinjal.jpg"></img>
                    <h1 className = "name">Brinjal</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>} on = 'click'  open={this.state.isOpen} onOpen={this.handleOpen}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "journal_img01.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                    <BsXCircle className = "icon" onClick = {this.handleClose}/>
                                        <p1>Brinjal</p1><br></br><br></br>
                                        <p2>Plants are mainly multicellular organisms, predominantly photosynthetic 
                                            eukaryotes of the kingdom Plantae. Historically, plants were treated as one of 
                                            two kingdoms including all living things that were not animals, and all algae 
                                            and fungi were treated as plants.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Brinjal"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                        <button className="plant_button02" onClick={() =>this.setState({plantName: "Brinjal"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div>  

                
                <div className = "plant_image">
                    <img src = "news.jpg"></img>
                    <h1 className = "name">Tomato</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "journal_img01.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Tomato</p1><br></br><br></br>
                                        <p2>Plants are mainly multicellular organisms, predominantly photosynthetic 
                                            eukaryotes of the kingdom Plantae. Historically, plants were treated as one of 
                                            two kingdoms including all living things that were not animals, and all algae 
                                            and fungi were treated as plants.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Tomato"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Tomato"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div> 


                <div className = "plant_image">
                    <img src = "okra.jpg"></img>
                    <h1 className = "name">Okra</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "journal_img01.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Okra</p1><br></br><br></br>
                                        <p2>Plants are mainly multicellular organisms, predominantly photosynthetic 
                                            eukaryotes of the kingdom Plantae. Historically, plants were treated as one of 
                                            two kingdoms including all living things that were not animals, and all algae 
                                            and fungi were treated as plants.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Okra"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Okra"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div>   

                


              
    
               


            </div>

        );
    }
}

export default journal