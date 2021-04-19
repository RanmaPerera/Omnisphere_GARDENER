import  React from "react";
import Navbar from './Components/Navigationbar/Navbar';
import './App.css';
import Video from "./Components/VideoContent/Video";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlantSuggestions from './Components/PlantSuggestion/PlantSuggestion';
import DeceasePrevention from "./Components/DeceasePrevention/DeceasePrevention";
import Home from "./Components/Home/Home";


function App() {
  return (

    <div className="App">   
    
      <Router>
        
        <Navbar />
      
        <Switch>  
            <Route exact path='/Home' component={Home}/>
            <Route exact path='/plant_suggestions' component={PlantSuggestions}/>
            <Route exact path='/disease_prevention' component={DeceasePrevention}/>
        
            {/*
              
              <Route exact path='/journal' component={}/>
              <Route exact path='/blog' component={}/>
              <Route exact path='/register' component={}/>
            
            */}

          

             <Video />
             
             {/* <Route exact path='/PageBox' component={PageBox}/> */}
          

        </Switch>

        
              <div className = "End">
            <Footer/>
        </div>
          

      </Router>
    </div>
  );
}

export default App;
