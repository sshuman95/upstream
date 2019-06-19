import React from 'react';
import './Homepage.css';
import Gallery from '../Gallery/gallery.js';
let image =['https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/61021551_10200252786502024_2586491050101047296_n.jpg?_nc_cat=101&_nc_oc=AQmoi6I-xyGInXaWF8IoPPsVfEqqR0a4yATfltLTCQX0LjuwkNbbHVk6Gk6yZXn3gJ4&_nc_ht=scontent-iad3-1.xx&oh=df810c1415528747d974f679c7ed950e&oe=5D91168E','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/60728051_10200252786582026_125551952875487232_n.jpg?_nc_cat=109&_nc_oc=AQn2e4_tXnkcUdzAiSWfItZRT2h-Ho2N1kXcJFBg1JKe0zJvF2FstFLdK0UPb8AfTlI&_nc_ht=scontent-iad3-1.xx&oh=721d622ffb5396975c9d5453c12afe60&oe=5D997CBC','https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/s960x960/32511906_10160365230530484_126510374827589632_o.jpg?_nc_cat=102&_nc_oc=AQnmOpNOfXtJPfGatdRMFtKv-3lacf2v54R7U8qMPsfTki-w5qGGzRpumAPgsucZ72g&_nc_ht=scontent-iad3-1.xx&oh=b53726ad859ea03dd18d7b439b4fdb46&oe=5D533660'];
let team = 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/21616404_1939715009630180_440099091537710744_n.jpg?_nc_cat=103&_nc_oc=AQmmLOwuno-VQZo0cNfoarRzhXFRpbSrVLaHzViqvZK3948C0C4H9yS1VT34y2CzK20&_nc_ht=scontent-iad3-1.xx&oh=4494fd427bf5624f506a4dd45125bba9&oe=5D987BFE';
//<h2 className='title'>Upstream Store</h2>

class Home extends React.Component{
    render(){
        return(
            <div id='main'>
                <div id='info'>
                <img src={team} alt='Upstream Team'/>
                <p><span id='message'>Jiu-Jitsu for Everyone!</span><br/>At Upstream BJJ we aim to create champions on and off the mat. No matter the age,  gender, or skill level we have a place for you!<br/> Come learn Jiu-Jitsu and Self-Defense taught by world-class instructor and Fifty/50 Black Belt Seph Smith.<br/> With evening and day time classes available, we can accommodate any schedule.<br/> See our full class list and schedule below!
Contact us or come on in for a free trial today to see what all the hype is about!</p>
                </div>
                <div id='gallery'>
                    <Gallery src={image[0]}/>
                </div>
                <div id='icons'>
                <a href='https://www.facebook.com/upstreambjj/'><img className='icon' src='https://cdn2.iconfinder.com/data/icons/social-media-2235/1024/facebook-512.png' alt='Facebook'/></a>
                <a href='https://www.instagram.com/upstreambjj/?hl=en'><img className='icon' src='https://cdn2.iconfinder.com/data/icons/social-media-2235/1024/insta-512.png' alt='Instagram'/></a>
                <a href='https://www.youtube.com/channel/UC-QjLeaL3fTAnN9ei8jhbqQ'><img className='icon' src='https://cdn2.iconfinder.com/data/icons/social-media-2235/1024/youtube-256.png' alt='YouTube'/></a>
                </div>
                <h5>UPSTREAM BJJ, 207 NORTH 3RD STREET, RICHMOND, VA, 23219, UNITED STATES</h5>
            </div>
        )
    }
};

export default Home;