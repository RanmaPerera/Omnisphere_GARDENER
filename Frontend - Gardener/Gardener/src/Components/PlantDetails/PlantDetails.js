import { render } from '@testing-library/react';
import React from 'react';
import './PlantDetails.css';

// function PlantDetails(){
class PlantDetails extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        plantName : "",
        plantsList:[],
        };

    }
    componentDidMount(){
        this.setState({plantName:this.props.location.state},() =>{
            this.getPlantDetails();
        },)
    }

    getPlantDetails(){
        // this.setState({plantName:this.props.location.state})
        let Name = this.props.location.state;
        let propsName=Name.toLowerCase();
        console.log(propsName)
        fetch("http://127.0.0.1:5000/plantDetails/" + propsName)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("PLantDSet")
                    console.log(result);
                    console.log("---------");
                    console.log(result.suggestedPlants);
                    this.setState({plantsList:result.suggestedPlants})
                    
                },

                (error) => {
                    console.log("error");
                }
            )
        // event.preventDefault();
    }

render(){
    const{plantsList}=this.state
    return(
        <div className = 'detailContent'>

             {/* Background Image */}
             <img src = "plantDetailbg.jpg" className = 'detailsBg'></img>


            <h1 className = 'plantName'>{this.props.location.state} </h1>

            
            <div className = 'detailsRequired'>

                <li>Plant Name : {this.props.location.state}</li>
                <li>Required field size : {plantsList[2]}</li>
                <li>Soil preperation of the field : {plantsList[3]}</li>
                <li>Space between each plant : {plantsList[4]}</li>
                <li>Depth of each hole : {plantsList[5]} </li>
                <li>Seed requirement : {plantsList[6]} </li>
                <li>Seeds per hole :  {plantsList[7]} </li>
                <li>Water supply for the field :  {plantsList[8]} </li>
                <li>Suitable fertilizers : {plantsList[9]} </li>
                <li>Fertilizer requirement : {plantsList[10]} </li>
                <li>Sunlight requirement : {plantsList[11]} </li>
                <li>Weed management : {plantsList[12]} </li>
            </div>

            <div className = 'plantImg'>
                <img src = 'tomato.jpg' className = 'plantImage'></img>
            </div>

            

        </div>
    );    

}
   

}



export default PlantDetails;