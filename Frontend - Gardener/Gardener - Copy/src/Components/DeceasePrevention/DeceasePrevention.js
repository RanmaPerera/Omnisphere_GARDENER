import React from 'react';
import './DeceasePrevention.css';
import ImageUploader from 'react-images-upload';

class DeceasePrevention extends React.Component {


   
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
           
            <div className = "background">
            
            <p>Upload a image of the desease for more suggestions...</p>

            <div className = "upload">
   
            <ImageUploader 
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
                maxFileSize={5242880}
            />
            </div>
             </div>
             
        );
    }
}

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