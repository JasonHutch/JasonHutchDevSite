import './homepage.css';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
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
                    <AiFillGithub style={{fontSize:'2rem',  color:'black'}}/>
                    <AiFillInstagram style={{fontSize:'2rem', color:'black', marginRight:'10px',marginLeft:'10px'}}/>
                    <AiFillLinkedin style={{fontSize:'2rem', color:'black'}}/>
                </div>
            </div>

        </div>
    )
}
export default Homepage;