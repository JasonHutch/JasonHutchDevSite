import './projectCard.css';
import { BiLogoTypescript } from "react-icons/bi";
import { SiMicrosoftsharepoint } from "react-icons/si";
import { Link } from 'react-router-dom';



const ProjectCard = () => {
    return (
        <Link to="/projects/1" style={{textDecoration:'none'}}>
            <div className="projectCard">
            <div style={{display:'flex', flexDirection:'row'}}>
                <div className='projectCard__imgWrap'>
                    <img src="https://picsum.photos/75"/>
                </div>
                <div className="projectCard__textWrap">
                    <p className='projectCard__title'>Project Title</p>
                    <p className='projectCard__subtitle'>2023</p>
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