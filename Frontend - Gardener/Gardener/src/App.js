import  React from "react";
import Navbar from './Components/Navigationbar/Navbar';
import './App.css';
import Video from "./Components/VideoContent/Video";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlantSuggestions from './Components/PlantSuggestion/PlantSuggestion';
import DeceasePrevention from "./Components/DeceasePrevention/DeceasePrevention";
import Home from "./App";
import PlantDetails from './Components/PlantDetails/PlantDetails';
import Journal from './Components/Journal/Journal';
import JournalDetail from './Components/JournalDetail/JournalDetail';
import Blog from './Components/Blog/Blog'



function App() {
  return (

    <div className="App">   
    
      <Router>
        
        <Navbar />
      
        <Switch>  
            {/* <Route exact path='/' component={Home}/>  */}
            <Route exact path='/plant_suggestions' component={PlantSuggestions}/>
            <Route exact path='/plantDetails' component={PlantDetails}/>
            <Route exact path='/journal' component={Journal}/> 
            <Route exact path='/JournalDetail' component={JournalDetail}/>
            <Route exact path='/disease_prevention' component={DeceasePrevention}/>
            <Route exact path='/blog' component={Blog}/>
            {/*
              
              <Route exact path='/journal' component={}/>
              <Route exact path='/blog' component={}/>
              <Route exact path='/register' component={}/>
            
            */}

          

             <Video />
             
             {/* <Route exact path='/PageBox' component={PageBox}/> */}
          

        </Switch>

        
             <Footer/> 
      
          

      </Router>
    </div>
  );
}

export default App;