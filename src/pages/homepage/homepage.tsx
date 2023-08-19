import './homepage.css';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Homepage = () => {
    return(
        <div className="homepage">
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <div className="homepage__avatarWrap">
                    <img  className="homepage__avatar"src="https://picsum.photos/200" alt="logo"/>
                </div>
                <div className="homepage__content">
                    <span style={{color:'black', fontSize:'2rem', fontWeight:'600'}}>Jason Hutchinson II</span>
                    <span style={{color:'rgba(0,0,0,.5)'}}>Software Developer | Entreprenuer | Innovator</span>
                </div>
                <div style={{marginTop:'1.5rem'}}>
                    <AiFillGithub style={{fontSize:'2rem',  color:'black'}}/>
                    <AiFillInstagram style={{fontSize:'2rem', color:'black', marginRight:'10px',marginLeft:'10px'}}/>
                    <AiFillLinkedin style={{fontSize:'2rem', color:'black'}}/>
                </div>
            </div>

        </div>
    )
};

export default Homepage;