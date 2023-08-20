import './projectCard.css';
import { BiLogoTypescript } from "react-icons/bi";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { Link } from 'react-router-dom';



const ProjectCard = () => {
    return (
        <Link to="/projects/1" style={{textDecoration:'none'}}>
            <div className="projectCard">
            <div style={{display:'flex', flexDirection:'row'}}>
                <div>
                    <img src="https://picsum.photos/75"/>
                </div>
                <div style={{display:'flex', flexDirection:'column', marginLeft:'1rem'}}>
                    <p style={{color:'#000000', fontSize:'1.5rem', fontWeight:'600', textAlign:'start', margin:'0px'}}>Project Title</p>
                    <p style={{color:'rgba(0,0,0,.5)', fontSize:'1rem', width:'230px', textAlign:'start',margin:'0px'}}>2023</p>
                </div>
            </div>

            <div style={{display:'flex', justifyContent:'start',marginTop:'1rem'}}>
                <BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>
                <SiMicrosoftsharepoint size={40} style={{color:'#000000',marginRight:'15px'}}/>
            </div>
            
        </div>
        </Link>
        
    )
}
export default ProjectCard;