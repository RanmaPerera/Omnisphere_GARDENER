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

                <li>Plant Name : <span>{this.props.location.state}</span></li>
                <li>Required field size : <span>{plantsList[2]}</span></li>
                <li>Soil preperation of the field : <span>{plantsList[3]}</span></li>
                <li>Space between each plant :<span> {plantsList[4]}</span></li>
                <li>Depth of each hole : <span>{plantsList[5]}</span> </li>
                <li>Seed requirement : <span>{plantsList[6]} </span></li>
                <li>Seeds per hole :  <span>{plantsList[7]} </span></li>
                <li>Water supply for the field : <span> {plantsList[8]}</span> </li>
                <li>Suitable fertilizers :<span> {plantsList[9]}</span> </li>
                <li>Fertilizer requirement : <span>{plantsList[10]}</span> </li>
                <li>Sunlight requirement :<span> {plantsList[11]} </span></li>
                <li>Weed management : <span>{plantsList[12]}</span> </li>
            </div>

            <div className = 'plantImg'>
                <img src = 'tomato.jpg' className = 'plantImage'></img>
            </div>

            

        </div>
    );    

}
   

}



export default PlantDetails;