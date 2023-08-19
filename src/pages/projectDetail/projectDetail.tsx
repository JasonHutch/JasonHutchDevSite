import { IoMdArrowRoundBack } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import TechLabel from "../../components/techLabel/techLabel";
import './projectDetail.css';
import { Link, useNavigate } from "react-router-dom";


const ProjectDetail = () => {
    const navigate = useNavigate();
    
    return (
        <div className="projectDetail">
            <div className="projectDetail__contentWrap">
                <div style={{display:'flex', alignItems:'start', justifyContent:'start', marginTop:'10%'}}>
                    <Link onClick={() => navigate(-1)} to={""}>
                        <IoMdArrowRoundBack className='projectDetail__back'/>
                    </Link>
                    <div style={{display:'flex', justifyContent:'start', flexDirection:'column', alignItems:'start'}}>
                        <p style={{ color: '#000000', fontSize: '3rem', margin:'0px 0px' }}>Compliance Workflow</p>
                        <p style={{ color: '#000000', fontSize: '1.5rem', margin:'0px 0px' }}>2023</p>
                    </div>
                </div>
                
                <div style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginTop:'5%'}}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', margin:'0px 0px', fontWeight:'700' }}>Description</p>
                    <p style={{ color: '#000000', fontSize: '1rem', margin:'0px 0px', textAlign:'start' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu est dignissim dignissim. Nam hendrerit finibus neque eu porttitor. Suspendisse malesuada enim quis dolor imperdiet, ut condimentum lacus lacinia. In a ornare </p>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginTop:'5%'}}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', margin:'0px 0px', fontWeight:'700' }}>Responsibilities</p>
                    <ul>
                        <li style={{color:'black', textAlign:'left', marginBottom:'20px'}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu est dignissim dignissim. Nam hendrerit finibus neque eu porttitor. Suspendisse malesuada enim quis dolor imperdiet, ut condimentum lacus lacinia. In a ornare
                        </li>
                        <li style={{color:'black', textAlign:'left',marginBottom:'20px'}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu est dignissim dignissim. Nam hendrerit finibus neque eu porttitor. Suspendisse malesuada enim quis dolor imperdiet, ut condimentum lacus lacinia. In a ornare
                        </li>
                        <li style={{color:'black', textAlign:'left',marginBottom:'20px'}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu est dignissim dignissim. Nam hendrerit finibus neque eu porttitor. Suspendisse malesuada enim quis dolor imperdiet, ut condimentum lacus lacinia. In a ornare
                        </li>
                        <li style={{color:'black', textAlign:'left',marginBottom:'20px'}}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu est dignissim dignissim. Nam hendrerit finibus neque eu porttitor. Suspendisse malesuada enim quis dolor imperdiet, ut condimentum lacus lacinia. In a ornare
                        </li>
                    </ul>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'start', alignItems:'start', marginTop:'5%'}}>
                    <p style={{ color: '#000000', fontSize: '1.5rem', fontWeight:'700', margin:'0px 0px', marginBottom:'10px' }}>Technology Used</p>
                    <div className="projectDetail__techGrid">
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                        <TechLabel title ="Typescript" icon={<BiLogoTypescript size={40} style={{color:'#000000',marginRight:'10px'}}/>}/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;