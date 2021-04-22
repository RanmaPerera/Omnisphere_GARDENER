import  React from "react";
import Navbar from './Components/Navigationbar/Navbar';
import './App.css';
import Video from "./Components/VideoContent/Video";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlantSuggestions from './Components/PlantSuggestion/PlantSuggestion';
import DeceasePrevention from "./Components/DeceasePrevention/DeceasePrevention";
import PlantDetails from './Components/PlantDetails/PlantDetails';
import Journal from './Components/Journal/Journal';
import JournalDetail from './Components/JournalDetail/JournalDetail';
import Blog from './Components/Blog/Blog'
import PageBox from './Components/PageContent/PageBox'



function App() {
  return (

    <div className="App">   
    
      <Router>
        
        <Navbar />
      
        <Switch>  
            
            <Route exact path='/plant_suggestions' component={PlantSuggestions}/>
            <Route exact path='/plantDetails' component={PlantDetails}/>
            <Route exact path='/journal' component={Journal}/> 
            <Route exact path='/JournalDetail' component={JournalDetail}/>
            <Route exact path='/disease_prevention' component={DeceasePrevention}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/PageBox' component={PageBox}/>
         

            <Video />
             
        </Switch>

            <Footer/> 
      
      </Router>
    </div>
  );
}

export default App;