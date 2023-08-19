import ProjectCard from "../../components/projectCard/projectCard";
import './projectsPage.css';

const ProjectsPage = () => {
    return (
        <div className="projects">
            <div className="projects__contentWrap">
                <div style={{display:'flex', justifyContent:'start'}}>
                    <p style={{ color: '#000000', fontSize: '3rem', margin:'30px 0px' }}>Projects</p>
                </div>
                <div className="projects__grid">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>

                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>

            </div>
        </div>
    );
};

export default ProjectsPage;