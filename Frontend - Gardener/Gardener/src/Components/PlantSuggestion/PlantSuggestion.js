import React from 'react';
import './PlantSuggestion.css';
import Popup from 'reactjs-popup';
import Typography from '@material-ui/core/Typography';
import { BsXCircle } from "react-icons/bs";




class PlantSuggestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            district: "Ampara",
            apiCalls: [],
            plantValue: "",
            isOpen: false
            
        };

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  
      
      
      handleOpen = () => {
        this.setState({ isOpen: true });
      }
      
      handleClose = () => {
        this.setState({ isOpen: false });
      }

    

    nextPath(path) {
        this.props.history.push({pathname: path, state: this.state.plantValue})
        
    }

    handleChange(e) {
        console.log("District Selected!!");
        this.setState({ district: e.target.value });
    }

    handleSubmit(event) {
        var selectedDistrict = this.state.district;
        fetch("http://127.0.0.1:5000/plantSuggestion/" + selectedDistrict)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("SuggestedPLants")
                    console.log(result.suggestedPlants[0]);
                    const apiCalls = result.suggestedPlants;
                    console.log(apiCalls);
                    { apiCalls.map((initialOne) => (console.log(initialOne[0]))) }
                    this.setState({apiCalls})

                    
                },

                (error) => {
                    console.log("error");
                }
            )
        alert('Your chosen district is: ' + this.state.district);
        event.preventDefault();
    }

    render() {
        const {apiCalls} = this.state;
        return (

            <div>
                {/* Background Image */}
                <img src="login.jpg"></img>

                <div className="details">
                    {/* District & Province Form */}
                    <form className="form" onSubmit={this.handleSubmit}>

                        <div className="district">


                            <label for="district"><strong>Choose a District :</strong></label>
                            


                            <select value={this.state.district} onChange={this.handleChange} id="district" name="district">
                                <option value="Ampara">Ampara</option>
                                <option value="Anuradhapura">Anuradhapura</option>
                                <option value="Badulla">Badulla</option>
                                <option value="Batticaloa">Batticaloa</option>
                                <option value="Colombo">Colombo</option>
                                <option value="Galle">Galle</option>
                                <option value="Gampaha">Gampaha</option>
                                <option value="Hambantota">Hambantota</option>
                                <option value="Jaffna">Jaffna</option>
                                <option value="Kalutara">Kalutara</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Kegalle">Kegalle</option>
                                <option value="Kilinochchi">Kilinochchi</option>
                                <option value="Kurunegala">Kurunegala</option>
                                <option value="Mannar">Mannar</option>
                                <option value="Matale">Matale</option>
                                <option value="Matara">Matara</option>
                                <option value="Monaragala">Moneragala</option>
                                <option value="Mullaitivu">Mullaitivu</option>
                                <option value="Nuwara Eliya">Nuwara Eliya</option>
                                <option value="Polonnaruwa">Polonnaruwa</option>
                                <option value="Puttalam">Puttalam</option>
                                <option value="Ratnapura">Ratnapura</option>
                                <option value="Trincomalee">Trincomalee</option>
                                <option value="Vavuniya">Vavuniya</option>

                            </select>
                        </div>
                        <div className="province">
                            <label for="province"><strong>Choose a Province :</strong></label>
                            <select id="province" name="province" >
                                <option value="Central">Central</option>
                                <option value="Eastern">Eastern</option>
                                <option value="North Central">North Central</option>
                                <option value="Northern">Northern</option>
                                <option value="North Western">North Western</option>
                                <option value="Sabaragamuwa">Sabaragamuwa</option>
                                <option value="Southern">Southern</option>
                                <option value="Uva">Uva</option>
                                <option value="Western">Western</option>

                            </select>
                        </div>
                        {/* Pop up window for the plant list */}
                        <Popup trigger={<button className="psButton" type="submit" >Show Plants</button>} on = 'click'  open={this.state.isOpen} onOpen={this.handleOpen}>
                            

                            <div class="plants">
                                <div class="plantContent animate" >
                                <BsXCircle className = "icon" onClick = {this.handleClose}/>
                                    <h1>Plants for your Location </h1>
                                    
                                    <div className="plantList">
                                        
                                    { apiCalls.map((initialOne) => (
                                   
                                    <div class="plant" value={initialOne[0]}><a onClick={() =>this.setState({plantValue: initialOne[0]}, () => this.nextPath('/PlantDetails'))}><Typography><span>{initialOne[0]}</span></Typography></a></div>
                                    )) 
                                    
                                    }
                                            
                                            

                                        


                                        {/* <div class="plant1"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant2"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant3"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant4"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant5"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant6"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant7"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant8"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant9"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant10"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant11"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant12"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant13"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant14"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div>
                                        <div class="plant15"><a onClick={() => this.nextPath('/PlantDetails')}>1</a></div> */}

                                    </div>

                                </div>
                            </div>

                        </Popup>
                    </form>

                </div>

            </div>

        );
    }
}

export default PlantSuggestion