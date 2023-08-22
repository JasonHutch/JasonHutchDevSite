import './homepage.css';
import { AiFillLinkedin} from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

import image from '../../../src/assets/headshot.jpg'

const Homepage = () => {
    return(
        <div className="homepage">
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div className="homepage__avatarWrap">
                    <img  className="homepage__avatar"src={image} alt="logo"/>
                </div>
                <div className="homepage__content">
                    <span style={{color:'#146C94', fontSize:'2rem', fontWeight:'600'}}>Jason Hutchinson II</span>
                    <span style={{color:'rgba(0,0,0,.5)'}}>Software Developer | Designer | Entrepreneur</span>
                </div>
                <div style={{marginTop:'1.5rem'}}>
                    <a href='mailto:Jasonr.hutchii@gmail.com'>
                        <IoMdMail style={{fontSize:'2rem', color:'black', marginRight:'10px',marginLeft:'10px'}}/>
                    </a>
                    <a href='https://www.linkedin.com/in/hutch-ii/'>
                        <AiFillLinkedin style={{fontSize:'2rem', color:'black'}}/>
                    </a>
                   
                   
                </div>
            </div>

        </div>
    )
}
export default Homepage;