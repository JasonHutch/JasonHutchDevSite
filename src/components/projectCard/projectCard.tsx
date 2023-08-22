import './projectCard.css';
import { Link } from 'react-router-dom';
import { IProject } from '../../models/IProject';


export interface IProjectCardProps {
    project:IProject
}

const ProjectCard = (props:IProjectCardProps) => {
    
    return (
        <Link style={{ textDecoration: 'none' }} to={`/projects/${props.project.name}`} state={{project:props.project}}>
            <div className="projectCard">
            <div style={{display:'flex', flexDirection:'row'}}>
                
                <div className="projectCard__textWrap">
                    <p className='projectCard__title'>{props.project.name}</p>
                    <p className='projectCard__subtitle'>{props.project.year}</p>
                </div>
            </div>
        </div>
        </Link>
        
    )
}
export default ProjectCard;