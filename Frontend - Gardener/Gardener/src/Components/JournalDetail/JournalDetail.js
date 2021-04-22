import React from "react"
import Popup from "reactjs-popup"
import './JournalDetail.css'
import { BsXCircle } from "react-icons/bs";

class JournalDetail extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            plantName :  "",
            week01fieldSize: "",
            week01waterSupply: "",
            week01soilProcessing: "",
            week01groundProcessing: "",
            week01sunlightRequirement: "",
            week01seedRequirement: "",
            week01spaceBetweenHoles: "",
            week01seedsPerHole: "",
            week01fertilizerRequirement: "",
            week01weedManagement: "",
            week01careGuideline: "",

            week02fieldSize: "",
            week02waterSupply: "",
            week02soilProcessing: "",
            week02groundProcessing: "",
            week02sunlightRequirement: "",
            week02seedRequirement: "",
            week02spaceBetweenHoles: "",
            week02seedsPerHole: "",
            week02fertilizerRequirement: "",
            week02weedManagement: "",
            week02careGuideline: "",

            
            week03fieldSize: "",
            week03waterSupply: "",
            week03soilProcessing: "",
            week03groundProcessing: "",
            week03sunlightRequirement: "",
            week03seedRequirement: "",
            week03spaceBetweenHoles: "",
            week03seedsPerHole: "",
            week03fertilizerRequirement: "",
            week03weedManagement: "",
            week03careGuideline: "",

            week04fieldSize: "",
            week04waterSupply: "",
            week04soilProcessing: "",
            week04groundProcessing: "",
            week04sunlightRequirement: "",
            week04seedRequirement: "",
            week04spaceBetweenHoles: "",
            week04seedsPerHole: "",
            week04fertilizerRequirement: "",
            week04weedManagement: "",
            week04careGuideline: "",

            week05fieldSize: "",
            week05waterSupply: "",
            week05soilProcessing: "",
            week05groundProcessing: "",
            week05sunlightRequirement: "",
            week05seedRequirement: "",
            week05spaceBetweenHoles: "",
            week05seedsPerHole: "",
            week05fertilizerRequirement: "",
            week05weedManagement: "",
            week05careGuideline: "",

            week06fieldSize: "",
            week06waterSupply: "",
            week06soilProcessing: "",
            week06groundProcessing: "",
            week06sunlightRequirement: "",
            week06seedRequirement: "",
            week06spaceBetweenHoles: "",
            week06seedsPerHole: "",
            week06fertilizerRequirement: "",
            week06weedManagement: "",
            week06careGuideline: "",

            week07fieldSize: "",
            week07waterSupply: "",
            week07soilProcessing: "",
            week07groundProcessing: "",
            week07sunlightRequirement: "",
            week07seedRequirement: "",
            week07spaceBetweenHoles: "",
            week07seedsPerHole: "",
            week07fertilizerRequirement: "",
            week07weedManagement: "",
            week07careGuideline: "",

            week08fieldSize: "",
            week08waterSupply: "",
            week08soilProcessing: "",
            week08groundProcessing: "",
            week08sunlightRequirement: "",
            week08seedRequirement: "",
            week08spaceBetweenHoles: "",
            week08seedsPerHole: "",
            week08fertilizerRequirement: "",
            week08weedManagement: "",
            week08careGuideline: "",

            isOpen: false

        };
    }

    handleOpen = () => {
        this.setState({ isOpen: true });
      }
      
      handleClose = () => {
        this.setState({ isOpen: false });
      }

    componentDidMount(){
        this.setState({plantName:this.props.location.state},() =>{
            this.weekOneDuidelines();
        },)
    }

    weekOneDuidelines(){
        let Name = this.props.location.state;
        let propsName=Name.toLowerCase();
        console.log("Week one guuidelines",propsName)
        fetch("http://127.0.0.1:5000/journalDetails/" + propsName)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log("Week One Data")
                    // console.log(result.weekOneGuidelines.fieldSize);

                    const week01fieldSize=result.weekOneGuidelines.fieldSize;
                    const week01waterSupply=result.weekOneGuidelines.waterSupply;
                    const week01soilProcessing=result.weekOneGuidelines.soilProcessing;
                    const week01groundProcessing=result.weekOneGuidelines.groundProcessing;
                    const week01sunlightRequirement=result.weekOneGuidelines.sunlightRequirement;
                    const week01seedRequirement = result.weekOneGuidelines.seedRequirement;
                    const week01spaceBetweenHoles = result.weekOneGuidelines.spaceBetweenHoles;
                    const week01seedsPerHole = result.weekOneGuidelines.seedsPerHole;
                    const week01fertilizerRequirement = result.weekOneGuidelines.fertilizerRequirement;
                    const week01weedManagement = result.weekOneGuidelines.weedManagement;
                    const week01careGuideline = result.weekOneGuidelines.careGuideline;
                    

                    const week02fieldSize=result.weekTwoGuidelines.fieldSize;
                    const week02waterSupply=result.weekTwoGuidelines.waterSupply;
                    const week02soilProcessing=result.weekTwoGuidelines.soilProcessing;
                    const week02groundProcessing=result.weekTwoGuidelines.groundProcessing;
                    const week02sunlightRequirement=result.weekTwoGuidelines.sunlightRequirement;
                    const week02seedRequirement = result.weekTwoGuidelines.seedRequirement;
                    const week02spaceBetweenHoles = result.weekTwoGuidelines.spaceBetweenHoles;
                    const week02seedsPerHole = result.weekTwoGuidelines.seedsPerHole;
                    const week02fertilizerRequirement = result.weekTwoGuidelines.fertilizerRequirement;
                    const week02weedManagement = result.weekTwoGuidelines.weedManagement;
                    const week02careGuideline = result.weekTwoGuidelines.careGuideline;

                    const week03fieldSize=result.weekThreeGuidelines.fieldSize;
                    const week03waterSupply=result.weekThreeGuidelines.waterSupply;
                    const week03soilProcessing=result.weekThreeGuidelines.soilProcessing;
                    const week03groundProcessing=result.weekThreeGuidelines.groundProcessing;
                    const week03sunlightRequirement=result.weekThreeGuidelines.sunlightRequirement;
                    const week03seedRequirement = result.weekThreeGuidelines.seedRequirement;
                    const week03spaceBetweenHoles = result.weekThreeGuidelines.spaceBetweenHoles;
                    const week03seedsPerHole = result.weekThreeGuidelines.seedsPerHole;
                    const week03fertilizerRequirement = result.weekThreeGuidelines.fertilizerRequirement;
                    const week03weedManagement = result.weekThreeGuidelines.weedManagement;
                    const week03careGuideline = result.weekThreeGuidelines.careGuideline;
                    

                    const week04fieldSize=result.weekFourGuidelines.fieldSize;
                    const week04waterSupply=result.weekFourGuidelines.waterSupply;
                    const week04soilProcessing=result.weekFourGuidelines.soilProcessing;
                    const week04groundProcessing=result.weekFourGuidelines.groundProcessing;
                    const week04sunlightRequirement=result.weekFourGuidelines.sunlightRequirement;
                    const week04seedRequirement = result.weekFourGuidelines.seedRequirement;
                    const week04spaceBetweenHoles = result.weekFourGuidelines.spaceBetweenHoles;
                    const week04seedsPerHole = result.weekFourGuidelines.seedsPerHole;
                    const week04fertilizerRequirement = result.weekFourGuidelines.fertilizerRequirement;
                    const week04weedManagement = result.weekFourGuidelines.weedManagement;
                    const week04careGuideline = result.weekFourGuidelines.careGuideline;

                    const week05fieldSize=result.weekFiveGuidelines.fieldSize;
                    const week05waterSupply=result.weekFiveGuidelines.waterSupply;
                    const week05soilProcessing=result.weekFiveGuidelines.soilProcessing;
                    const week05groundProcessing=result.weekFiveGuidelines.groundProcessing;
                    const week05sunlightRequirement=result.weekFiveGuidelines.sunlightRequirement;
                    const week05seedRequirement = result.weekFiveGuidelines.seedRequirement;
                    const week05spaceBetweenHoles = result.weekFiveGuidelines.spaceBetweenHoles;
                    const week05seedsPerHole = result.weekFiveGuidelines.seedsPerHole;
                    const week05fertilizerRequirement = result.weekFiveGuidelines.fertilizerRequirement;
                    const week05weedManagement = result.weekFiveGuidelines.weedManagement;
                    const week05careGuideline = result.weekFiveGuidelines.careGuideline;

                    const week06fieldSize=result.weekSixGuidelines.fieldSize;
                    const week06waterSupply=result.weekSixGuidelines.waterSupply;
                    const week06soilProcessing=result.weekSixGuidelines.soilProcessing;
                    const week06groundProcessing=result.weekSixGuidelines.groundProcessing;
                    const week06sunlightRequirement=result.weekSixGuidelines.sunlightRequirement;
                    const week06seedRequirement = result.weekSixGuidelines.seedRequirement;
                    const week06spaceBetweenHoles = result.weekSixGuidelines.spaceBetweenHoles;
                    const week06seedsPerHole = result.weekSixGuidelines.seedsPerHole;
                    const week06fertilizerRequirement = result.weekSixGuidelines.fertilizerRequirement;
                    const week06weedManagement = result.weekSixGuidelines.weedManagement;
                    const week06careGuideline = result.weekSixGuidelines.careGuideline;

                    const week07fieldSize=result.weekSevenGuidelines.fieldSize;
                    const week07waterSupply=result.weekSevenGuidelines.waterSupply;
                    const week07soilProcessing=result.weekSevenGuidelines.soilProcessing;
                    const week07groundProcessing=result.weekSevenGuidelines.groundProcessing;
                    const week07sunlightRequirement=result.weekSevenGuidelines.sunlightRequirement;
                    const week07seedRequirement = result.weekSevenGuidelines.seedRequirement;
                    const week07spaceBetweenHoles = result.weekSevenGuidelines.spaceBetweenHoles;
                    const week07seedsPerHole = result.weekSevenGuidelines.seedsPerHole;
                    const week07fertilizerRequirement = result.weekSevenGuidelines.fertilizerRequirement;
                    const week07weedManagement = result.weekSevenGuidelines.weedManagement;
                    const week07careGuideline = result.weekSevenGuidelines.careGuideline;

                    const week08fieldSize=result.weekEightGuidelines.fieldSize;
                    const week08waterSupply=result.weekEightGuidelines.waterSupply;
                    const week08soilProcessing=result.weekEightGuidelines.soilProcessing;
                    const week08groundProcessing=result.weekEightGuidelines.groundProcessing;
                    const week08sunlightRequirement=result.weekEightGuidelines.sunlightRequirement;
                    const week08seedRequirement = result.weekEightGuidelines.seedRequirement;
                    const week08spaceBetweenHoles = result.weekEightGuidelines.spaceBetweenHoles;
                    const week08seedsPerHole = result.weekEightGuidelines.seedsPerHole;
                    const week08fertilizerRequirement = result.weekEightGuidelines.fertilizerRequirement;
                    const week08weedManagement = result.weekEightGuidelines.weedManagement;
                    const week08careGuideline = result.weekEightGuidelines.careGuideline;



                    this.setState({week01fieldSize,week01waterSupply,week01soilProcessing,week01groundProcessing,week01sunlightRequirement,
                        week01seedRequirement,week01spaceBetweenHoles,week01fertilizerRequirement,week01weedManagement,week01careGuideline,week02fieldSize,
                        week02waterSupply,week02soilProcessing,week02groundProcessing,week02sunlightRequirement,
                        week02seedRequirement,week02spaceBetweenHoles,week02fertilizerRequirement,week02weedManagement,week02careGuideline,week03fieldSize,
                        week03waterSupply,week03soilProcessing,week03groundProcessing,week03sunlightRequirement,
                        week03seedRequirement,week03spaceBetweenHoles,week03fertilizerRequirement,week03weedManagement,week03careGuideline,week04fieldSize,
                        week04waterSupply,week04soilProcessing,week04groundProcessing,week04sunlightRequirement,
                        week04seedRequirement,week04spaceBetweenHoles,week04fertilizerRequirement,week04weedManagement,week04careGuideline,week05fieldSize,
                        week05waterSupply,week05soilProcessing,week05groundProcessing,week05sunlightRequirement,
                        week05seedRequirement,week05spaceBetweenHoles,week05fertilizerRequirement,week05weedManagement,week05careGuideline,week06fieldSize,
                        week06waterSupply,week06soilProcessing,week06groundProcessing,week06sunlightRequirement,
                        week06seedRequirement,week06spaceBetweenHoles,week06fertilizerRequirement,week06weedManagement,week06careGuideline,week07fieldSize,
                        week07waterSupply,week07soilProcessing,week07groundProcessing,week07sunlightRequirement,
                        week07seedRequirement,week07spaceBetweenHoles,week07fertilizerRequirement,week07weedManagement,week07careGuideline,week08fieldSize,
                        week08waterSupply,week08soilProcessing,week08groundProcessing,week08sunlightRequirement,
                        week08seedRequirement,week08spaceBetweenHoles,week08fertilizerRequirement,week08weedManagement,week08careGuideline})

                    
                },

                (error) => {
                    console.log("error");
                }
            )
    }

    

    render(){
        const{plantName,week01fieldSize,week01waterSupply,week01soilProcessing,week01groundProcessing,week01sunlightRequirement,
            week01seedRequirement,week01spaceBetweenHoles,week01fertilizerRequirement,week01weedManagement,week01careGuideline,week02fieldSize,
            week02waterSupply,week02soilProcessing,week02groundProcessing,week02sunlightRequirement,
            week02seedRequirement,week02spaceBetweenHoles,week02fertilizerRequirement,week02weedManagement,week02careGuideline,week03fieldSize,
            week03waterSupply,week03soilProcessing,week03groundProcessing,week03sunlightRequirement,
            week03seedRequirement,week03spaceBetweenHoles,week03fertilizerRequirement,week03weedManagement,week03careGuideline,week04fieldSize,
            week04waterSupply,week04soilProcessing,week04groundProcessing,week04sunlightRequirement,
            week04seedRequirement,week04spaceBetweenHoles,week04fertilizerRequirement,week04weedManagement,week04careGuideline,week05fieldSize,
            week05waterSupply,week05soilProcessing,week05groundProcessing,week05sunlightRequirement,
            week05seedRequirement,week05spaceBetweenHoles,week05fertilizerRequirement,week05weedManagement,week05careGuideline,week06fieldSize,
            week06waterSupply,week06soilProcessing,week06groundProcessing,week06sunlightRequirement,
            week06seedRequirement,week06spaceBetweenHoles,week06fertilizerRequirement,week06weedManagement,week06careGuideline,week07fieldSize,
            week07waterSupply,week07soilProcessing,week07groundProcessing,week07sunlightRequirement,
            week07seedRequirement,week07spaceBetweenHoles,week07fertilizerRequirement,week07weedManagement,week07careGuideline,week08fieldSize,
            week08waterSupply,week08soilProcessing,week08groundProcessing,week08sunlightRequirement,
            week08seedRequirement,week08spaceBetweenHoles,week08fertilizerRequirement,week08weedManagement,week08careGuideline}=this.state
        return(


            <div>

                <video className = 'journalVideo' src = 'JournalVideo.mp4' autoPlay loop muted></video> 

                {/* --------------------------------------------Week 01----------------------------------------*/}

                <div className = "week">

                    <div className = "journal_Img">
               
                        <img src ="week01.jpg"></img>

                    </div>
               
                    <div className = "weekInfo">
                        <p><h1>Week One</h1>
                        
                        <Popup trigger = {<button>Guidelines</button>} >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                
                                    <li>Plant Name : <span>{plantName}</span></li>
                                    <li>Field size : <span>{week01fieldSize}</span></li>
                                    <li>Soil processing : <span>{week01soilProcessing}</span> </li>
                                    <li>Ground processing : <span>{week01groundProcessing}</span></li>
                                    <li>Depth of each hole : <span>{week01spaceBetweenHoles}</span></li>
                                    <li>Seed requirement : <span>{week01seedRequirement}</span></li>
                                    <li>Sunlight requirement : <span>{week01sunlightRequirement}</span></li>
                                    <li>Water supply  : <span>{week01waterSupply}</span></li>
                                    <li>Fertilizer supply : <span>{week01fertilizerRequirement}</span></li>
                                    <li>Weed management : <span>{week01weedManagement}</span></li>
                                    <li>Care Guideline : <span>{week01careGuideline}</span></li>
                    

                                    </div>
                                </div>
                            </div>
                            
                        </Popup></p>
                    </div>
                </div>

                {/* --------------------------------------------Week 02----------------------------------------*/}

                <div className = "week">

                    <div className = "journal_Img">
               
                        <img src ="week02.jpg"></img>

                    </div>
               
                    <div className = "weekInfo">
                        <p><h1>Week Two</h1>
                        <Popup trigger = {<button>Guidelines</button>} >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                    
                                    <li>Plant Name : <span>{plantName}</span></li>
                                    <li>Field size : <span>{week02fieldSize}</span></li>
                                    <li>Soil processing : <span>{week02soilProcessing}</span> </li>
                                    <li>Ground processing : <span>{week02groundProcessing}</span></li>
                                    <li>Depth of each hole : <span>{week02spaceBetweenHoles}</span></li>
                                    <li>Seed requirement : <span>{week02seedRequirement}</span></li>
                                    <li>Sunlight requirement : <span>{week02sunlightRequirement}</span></li>
                                    <li>Water supply  : <span>{week02waterSupply}</span></li>
                                    <li>Fertilizer supply : <span>{week02fertilizerRequirement}</span></li>
                                    <li>Weed management : <span>{week02weedManagement}</span></li>
                                    <li>Care Guideline : <span>{week02careGuideline}</span></li>
                    

                                    </div>
                                </div>
                            </div>
                            
                        </Popup></p>
                    </div>
                </div>

                {/* --------------------------------------------Week 03----------------------------------------*/}

                <div className = "week">

                    <div className = "journal_Img">
               
                        <img src ="week03.jpg"></img>

                    </div>
               
                    <div className = "weekInfo">
                        <p><h1>Week Three</h1>
                        <Popup trigger = {<button>Guidelines</button>} >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                    
                                    <li>Plant Name : <span>{plantName}</span></li>
                                    <li>Field size : <span>{week03fieldSize}</span></li>
                                    <li>Soil processing :<span> {week03soilProcessing}</span> </li>
                                    <li>Ground processing : <span>{week03groundProcessing}</span></li>
                                    <li>Depth of each hole : <span>{week03spaceBetweenHoles}</span></li>
                                    <li>Seed requirement : <span>{week03seedRequirement}</span></li>
                                    <li>Sunlight requirement : <span>{week03sunlightRequirement}</span></li>
                                    <li>Water supply  : <span>{week03waterSupply}</span></li>
                                    <li>Fertilizer supply : <span>{week03fertilizerRequirement}</span></li>
                                    <li>Weed management : <span>{week03weedManagement}</span></li>
                                    <li>Care Guideline : <span>{week03careGuideline}</span></li>
                    

                                    </div>
                                </div>
                            </div>
                            
                        </Popup></p>
                    </div>
                </div>

                 {/* --------------------------------------------Week 04----------------------------------------*/}

                <div className = "week">

                <div className = "journal_Img">

                    <img src ="week04.jpg"></img>

                </div>

                    <div className = "weekInfo">
                        <p><h1>Week Four</h1>
                        <Popup trigger = {<button>Guidelines</button>} >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                
                                        <li>Plant Name : <span>{plantName}</span></li>
                                        <li>Field size : <span>{week04fieldSize}</span></li>
                                        <li>Soil processing :<span> {week04soilProcessing}</span> </li>
                                        <li>Ground processing : <span>{week04groundProcessing}</span></li>
                                        <li>Depth of each hole : <span>{week04spaceBetweenHoles}</span></li>
                                        <li>Seed requirement : <span>{week04seedRequirement}</span></li>
                                        <li>Sunlight requirement : <span>{week04sunlightRequirement}</span></li>
                                        <li>Water supply  : <span>{week04waterSupply}</span></li>
                                        <li>Fertilizer supply : <span>{week04fertilizerRequirement}</span></li>
                                        <li>Weed management : <span>{week04weedManagement}</span></li>
                                        <li>Care Guideline : <span>{week04careGuideline}</span></li>


                                    </div>
                                </div>
                            </div>
                        
                        </Popup></p>
                    </div>
                </div>

                 {/* --------------------------------------------Week 05----------------------------------------*/}

                 <div className = "week">

                    <div className = "journal_Img">

                        <img src ="week05.jpg"></img>

                    </div>

                        <div className = "weekInfo">
                            <p><h1>Week Five</h1>
                            <Popup trigger = {<button>Guidelines</button>} >

                                <div className = "weekly_detail">
                                    <div className = "week_guide animate">
                                        <div className = "guide_list">
                                        
                                        <li>Plant Name : <span>{plantName}</span></li>
                                        <li>Field size : <span>{week05fieldSize}</span></li>
                                        <li>Soil processing : <span>{week05soilProcessing}</span> </li>
                                        <li>Ground processing : <span>{week05groundProcessing}</span></li>
                                        <li>Depth of each hole : <span>{week05spaceBetweenHoles}</span></li>
                                        <li>Seed requirement : <span>{week05seedRequirement}</span></li>
                                        <li>Sunlight requirement : <span>{week05sunlightRequirement}</span></li>
                                        <li>Water supply  : <span>{week05waterSupply}</span></li>
                                        <li>Fertilizer supply : <span>{week05fertilizerRequirement}</span></li>
                                        <li>Weed management : <span>{week05weedManagement}</span></li>
                                        <li>Care Guideline : <span>{week05careGuideline}</span></li>


                                        </div>
                                    </div>
                                </div>
                                
                            </Popup></p>
                        </div>
                    </div>

                     {/* --------------------------------------------Week 06----------------------------------------*/}

                    <div className = "week">

                        <div className = "journal_Img">

                            <img src ="week06.jpg"></img>

                        </div>

                        <div className = "weekInfo">
                            <p><h1>Week Six</h1>
                            <Popup trigger = {<button>Guidelines</button>} >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                    
                                    <li>Plant Name : <span>{plantName}</span></li>
                                    <li>Field size : <span>{week06fieldSize}</span></li>
                                    <li>Soil processing : <span>{week06soilProcessing}</span> </li>
                                    <li>Ground processing : <span>{week06groundProcessing}</span></li>
                                    <li>Depth of each hole : <span>{week06spaceBetweenHoles}</span></li>
                                    <li>Seed requirement : <span>{week06seedRequirement}</span></li>
                                    <li>Sunlight requirement : <span>{week06sunlightRequirement}</span></li>
                                    <li>Water supply  : <span>{week06waterSupply}</span></li>
                                    <li>Fertilizer supply : <span>{week06fertilizerRequirement}</span></li>
                                    <li>Weed management : <span>{week06weedManagement}</span></li>
                                    <li>Care Guideline : <span>{week06careGuideline}</span></li>


                                        </div>
                                    </div>
                                </div>
                                
                            </Popup></p>
                        </div>
                    </div>

                                {/* --------------------------------------------Week 07----------------------------------------*/}

                    <div className = "week">

                        <div className = "journal_Img">

                            <img src ="week07.png"></img>

                        </div>

                    <div className = "weekInfo">
                        <p><h1>Week Seven</h1>
                        <Popup trigger = {<button>Guidelines</button>} on = 'click'  >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                    
                                    <li>Plant Name : <span>{plantName}</span></li>
                                    <li>Field size : <span>{week07fieldSize}</span></li>
                                    <li>Soil processing : <span>{week07soilProcessing} </span></li>
                                    <li>Ground processing : <span>{week07groundProcessing}</span></li>
                                    <li>Depth of each hole : <span>{week07spaceBetweenHoles}</span></li>
                                    <li>Seed requirement : <span>{week07seedRequirement}</span></li>
                                    <li>Sunlight requirement : <span>{week07sunlightRequirement}</span></li>
                                    <li>Water supply  : <span>{week07waterSupply}</span></li>
                                    <li>Fertilizer supply : <span>{week07fertilizerRequirement}</span></li>
                                    <li>Weed management : <span>{week07weedManagement}</span></li>
                                    <li>Care Guideline : <span>{week07careGuideline}</span></li>


                                    </div>
                                </div>
                            </div>
                            
                        </Popup></p>
                    </div>
                </div>

                     {/* --------------------------------------------Week 08----------------------------------------*/}

                <div className = "week">

                    <div className = "journal_Img">

                        <img src ="week08.jpeg"></img>

                    </div>

                    <div className = "weekInfo">
                        <p><h1>Week Eight</h1>
                        <Popup trigger = {<button>Guidelines</button>} >

                            <div className = "weekly_detail">
                                <div className = "week_guide animate">
                                    <div className = "guide_list">
                                
                                        <li>Plant Name : <span>{plantName}</span></li>
                                        <li>Field size : <span>{week08fieldSize}</span></li>
                                        <li>Soil processing :<span> {week08soilProcessing} </span></li>
                                        <li>Ground processing : <span>{week08groundProcessing}</span></li>
                                        <li>Depth of each hole : <span>{week08spaceBetweenHoles}</span></li>
                                        <li>Seed requirement : <span>{week08seedRequirement}</span></li>
                                        <li>Sunlight requirement :<span> {week08sunlightRequirement}</span></li>
                                        <li>Water supply  : <span>{week08waterSupply}</span></li>
                                        <li>Fertilizer supply : <span>{week08fertilizerRequirement}</span></li>
                                        <li>Weed management : <span>{week08weedManagement}</span></li>
                                        <li>Care Guideline : <span>{week08careGuideline}</span></li>


                                    </div>
                                </div>
                            </div>
            
                        </Popup></p>
                    </div>
                </div>


            </div> 

        );
    }
}

export default JournalDetail