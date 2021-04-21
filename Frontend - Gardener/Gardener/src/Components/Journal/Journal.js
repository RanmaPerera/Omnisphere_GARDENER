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
              
        {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}
                <div className = "plant_image">
                    <img src = "brinjal.jpg"></img>
                    <h1 className = "name">Brinjal</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>} on = 'click'  open={this.state.isOpen} onOpen={this.handleOpen}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "brinjal.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                    <BsXCircle className = "icon" onClick = {this.handleClose}/>
                                        <p1>Brinjal</p1><br></br><br></br>
                                        <p2>Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena
                                            is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in 
                                            several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition.</p2>

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

{/* -----------------------------------------------Plant Image ------------------------------------------------------- */}
                
                <div className = "plant_image">
                    <img src = "news.jpg"></img>
                    <h1 className = "name">Tomato</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>} >
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "news.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                    
                                        <p1>Tomato</p1><br></br><br></br>
                                        <p2>The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. 
                                            The species originated in western South America and Central America. The Nahuatl word tomatl gave rise 
                                            to the Spanish word tomate, from which the English word tomato derived. </p2>

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

{/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                <div className = "plant_image">
                    <img src = "okra.jpg"></img>
                    <h1 className = "name">Okra</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "okra.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Okra</p1><br></br><br></br>
                                        <p2>Okra or Okro, Abelmoschus esculentus, known in many English-speaking countries as ladies' fingers or ochro, is
                                             a flowering plant in the mallow family. It is valued for its edible green seed pods. The geographical origin of
                                              okra is disputed, with supporters of West African, Ethiopian, and South Asian origins. </p2>

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

                {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                <div className = "plant_image">
                    <img src = "cucumber.jfif"></img>
                    <h1 className = "name">Cucumber</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "cucumber.jfif"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Cucumber</p1><br></br><br></br>
                                        <p2>Cucumber is a widely-cultivated creeping vine plant in the Cucurbitaceae gourd family that bears cucumiform 
                                            fruits, which are used as vegetables. There are three main varieties of cucumber—slicing, pickling, and
                                            burpless/seedless—within which several cultivars have been created.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Cucumber"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Cucumber"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div>   

                {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                <div className = "plant_image">
                    <img src = "Chillie.jfif"></img>
                    <h1 className = "name">Chillie</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "Chillie.jfif"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Chillie</p1><br></br><br></br>
                                        <p2>The chili pepper, from Nahuatl chīlli, is the fruit of plants from the genus Capsicum which are 
                                            members of the nightshade family, Solanaceae. Chili peppers are widely used in many cuisines as 
                                            a spice to add heat to dishes.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Chillie"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Chillie"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div>   

                 {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                 <div className = "plant_image">
                    <img src = "Snake Gourd.jpeg"></img>
                    <h1 className = "name">Snake Gourds</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "Snake Gourd.jpeg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Snake Gourds</p1><br></br><br></br>
                                        <p2>Trichosanthes cucumerina is a tropical or subtropical vine. Its variety T. cucumerina var. anguina raised
                                             for its strikingly long fruit. In Asia, it is eaten immature as a vegetable much like the summer squash 
                                             and in Africa, the reddish pulp of mature snake gourd is used as an economical substitute for tomato.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Snake Gourds"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Snake Gourds"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div> 

                {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                 <div className = "plant_image">
                    <img src = "Pumpkin.jpg"></img>
                    <h1 className = "name">Pumpkin</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "Pumpkin.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Pumpkin</p1><br></br><br></br>
                                        <p2>A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin,
                                             and is most often deep yellow to orange in coloration. The thick shell contains the
                                              seeds and pulp.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Pumpkin"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Pumpkin"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div> 

                {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                 <div className = "plant_image">
                    <img src = "Capsicum.jpg"></img>
                    <h1 className = "name">Capsicum</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "Capsicum.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Capsicum</p1><br></br><br></br>
                                        <p2>Capsicum annuum is a species of the plant genus Capsicum native to southern North America
                                            and northern South America. This species is the most common and extensively cultivated of 
                                            the five domesticated capsicums.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Capsicum"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Capsicum"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div> 

                {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                 <div className = "plant_image">
                    <img src = "Radish.jfif"></img>
                    <h1 className = "name">Radish</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "Radish.jfif"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Radish</p1><br></br><br></br>
                                        <p2>The radish is an edible root vegetable of the family Brassicaceae that was domesticated in Asia
                                            prior to Roman times. Radishes are grown and consumed throughout the world, being mostly eaten
                                            raw as a crunchy salad vegetable with a pungent flavor.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Radish"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Radish"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div> 

                {/* -----------------------------------------------Plant Image ------------------------------------------------------- */}

                 <div className = "plant_image">
                    <img src = "Eggplant.jpg"></img>
                    <h1 className = "name">Eggplant</h1>
                    <Popup trigger = {<button className="plant_button01">More Details</button>}>
                        <div className = "more_details">
                            <div className = "detail_content animate">

                                <div className = "detail_body">
                                    <div className = "body_col">
                                        <img src = "Eggplant.jpg"></img>

                                    </div>
                                    <div className = "body_col">
                                        <p1>Eggplant</p1><br></br><br></br>
                                        <p2>Eggplant, aubergine or brinjal is a plant species in the nightshade family Solanaceae. Solanum melongena
                                            is grown worldwide for its edible fruit. Most commonly purple, the spongy, absorbent fruit is used in
                                            several cuisines. Typically used as a vegetable in cooking, it is a berry by botanical definition.</p2>

                                            <button className="plant_button02" onClick={() =>this.setState({plantName: "Eggplant"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Popup>
                     <div className = "mid">
                     <button className="plant_button02" onClick={() =>this.setState({plantName: "Eggplant"},() => this.nextPath('/JournalDetail'))}>Start Journal</button>
                    </div>
                </div> 

               

                

                


              
    
               


            </div>

        );
    }
}

export default journal