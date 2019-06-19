import React from 'react';
import './gallery.css';

let image =['https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/61021551_10200252786502024_2586491050101047296_n.jpg?_nc_cat=101&_nc_oc=AQmoi6I-xyGInXaWF8IoPPsVfEqqR0a4yATfltLTCQX0LjuwkNbbHVk6Gk6yZXn3gJ4&_nc_ht=scontent-iad3-1.xx&oh=df810c1415528747d974f679c7ed950e&oe=5D91168E','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/60728051_10200252786582026_125551952875487232_n.jpg?_nc_cat=109&_nc_oc=AQn2e4_tXnkcUdzAiSWfItZRT2h-Ho2N1kXcJFBg1JKe0zJvF2FstFLdK0UPb8AfTlI&_nc_ht=scontent-iad3-1.xx&oh=721d622ffb5396975c9d5453c12afe60&oe=5D997CBC','https://i.imgur.com/lYoBHqP.jpg'];
let image2 = 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/60728051_10200252786582026_125551952875487232_n.jpg?_nc_cat=109&_nc_oc=AQn2e4_tXnkcUdzAiSWfItZRT2h-Ho2N1kXcJFBg1JKe0zJvF2FstFLdK0UPb8AfTlI&_nc_ht=scontent-iad3-1.xx&oh=721d622ffb5396975c9d5453c12afe60&oe=5D997CBC';
let image3='https://i.imgur.com/lYoBHqP.jpg';


class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            src: image[0],
            href:''
        }
        this.openSchool = this.openSchool.bind(this);
        this.displayNextImage=this.displayNextImage.bind(this);
    }

    
    displayNextImage(event){
        setTimeout(()=>{
            if(this.state.src===image[0]){
                this.setState({
                    src:image[1]
                })
            } else if(this.state.src===image[1]){
                this.setState({
                    src:image[2]
                })
            } else if(this.state.src===image[2]){
                this.setState({
                    src:image[0]
                })
            }
        },3000)
    }


    openSchool(event){
        if(this.state.src === image3){
            window.open("https://upstream-bjj.teachable.com/")
        }
    }

    render(){
        return (<div id='container'>
           <img id='img' alt="galleryImage" src={this.state.src} onClick={this.openSchool} onLoad={this.displayNextImage}/>
        </div>)
    }
};

export default Gallery;