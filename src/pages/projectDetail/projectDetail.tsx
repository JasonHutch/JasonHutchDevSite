import { IoMdArrowRoundBack } from "react-icons/io";
import './projectDetail.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/scollToTop/scollToTop";

const ProjectDetail = () => {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { project } = state;
    
    return (
        <div className="projectDetail">
            <div className="projectDetail__contentWrap">
                <div className="projectDetail__header">
                    <Link onClick={() => navigate(-1)} to={""} style={{marginBottom:'2rem'}}>
                        <IoMdArrowRoundBack className='projectDetail__back'/>
                    </Link>
                    <div style={{display:'flex', justifyContent:'start', flexDirection:'column', alignItems:'start'}}>
                        <p className="projectDetail__title">{project.name}</p>
                        <p className="projectDetail__subtitle">{project.year}</p>
                    </div>
                </div>
                
                <div style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginTop:'5%'}}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', margin:'0px 0px', fontWeight:'700' }}>Description</p>
                    <p style={{ color: '#000000', fontSize: '1rem', margin:'0px 0px', textAlign:'start' }}>{project.description}</p>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginTop:'5%'}}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', margin:'0px 0px', fontWeight:'700' }}>Responsibilities</p>
                    <ul>
                        {
                            project.responsibilities.map((item:string, index:number) => {
                                return (
                                    <li style={{color:'black', textAlign:'left', marginBottom:'20px'}} key={index}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* <div style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginTop:'5%'}}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', fontWeight:'700', margin:'0px 0px', marginBottom:'10px' }}>Technology Used</p>
                    <div className="projectDetail__techGrid">
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={30} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={30} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={30} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={30} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={30} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={30} style={{color:'#000000',marginRight:'10px'}}/>}/>
                    </div>

                </div> */}
            </div>
            <ScrollToTop/>
        </div>
        
    );
}

export default ProjectDetail;