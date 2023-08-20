import Tag from '../../components/tag/tag';
import './aboutPageAlt.css';

import { MdOutlineAutoFixHigh } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { LiaSmileBeam } from "react-icons/lia";
import { BsCodeSlash } from "react-icons/bs";
import AttributeRow from '../../components/attributeRow/attributeRow';
import WorkExperienceRow from '../../components/workExperienceRow/workExperienceRow';
import ProjectCard from '../../components/projectCard/projectCard';
import Title from '../../components/title/title';
import Homepage from '../homepage/homepage';
import Header from '../../components/header/header';
import '../layout/layout.css'


const AboutPageAlt = () => {

    const languages = ['Typescript', 'C#', 'Python', 'Java', 'HTML', 'CSS', 'SQL'];
    const tools = ['.NET Core', 'React', 'Docker', 'Synapse Analytics', 'PySpark', 'Pandas'];
    const certs = ['Microsoft Certified: Azure AI Fundamentals', 'Microsoft Certified: Azure AI Fundamentals'];
    return (


        <div className="layout">
            <header>
                <Header />
            </header>
            <div className="layout__content">
                <div className='aboutAlt'>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '10%', width: '100%' }}>
                        <div style={{ margin: '10rem 0px' }}>
                            <Homepage />
                        </div>

                        <Title id="WorkExperience" title='Work Experience' />
                        <div className='aboutPage__experience'>
                            <WorkExperienceRow />
                            <WorkExperienceRow />
                            <WorkExperienceRow />
                        </div>
                        <Title id="AboutMe" title='About Me' />
                        <div className="aboutAlt__aboutMe">
                            <div className="aboutAlt__leftContent">
                                <div className="aboutAlt__leftContentGrid">
                                    <p style={{ color: '#000000', fontSize: '1.5rem' }}>Languages</p>
                                    <div className='aboutAlt__grid'>
                                        {
                                            languages.map((langauge) => {
                                                return (
                                                    <Tag title={langauge} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="aboutAlt__leftContentGrid">
                                    <p style={{ color: '#000000', fontSize: '1.5rem' }}>Tools</p>
                                    <div className='aboutAlt__grid'>
                                        {
                                            tools.map((langauge) => {
                                                return (
                                                    <Tag title={langauge} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="aboutAlt__leftContentGrid">
                                    <p style={{ color: '#000000', fontSize: '1.5rem' }}>Certifications</p>
                                    <div className='aboutAlt__grid'>
                                        {
                                            certs.map((cert) => {
                                                return (
                                                    <Tag title={cert} />
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="aboutAlt__rightContent">
                                <div className='aboutAlt__rightContentWrap'>
                                    <AttributeRow title="Solution Oriented" description='I’m always looking to move forward. I believe that feedback is king and work with a fail fast mentality.' icon={<MdOutlineAutoFixHigh size={50} style={{ color: '#000000' }} />} />
                                    <AttributeRow title="Self Starter" description='II find my initiative is driven by curiosity and manifests in getting results quicker' icon={<AiOutlineFire size={50} style={{ color: '#000000' }} />} />
                                    <AttributeRow title="Foolishly Optimistic" description='Attitude is contagious and my goal in work and life is to inspire those around me by kicking ass with a big ol smile on my face.' icon={<LiaSmileBeam size={50} style={{ color: '#000000' }} />} />
                                    <AttributeRow title="Learns By Doing" description='I believe the  best way to learn something is to try things and make mistakes.' icon={<BsCodeSlash size={50} style={{ color: '#000000' }} />} />
                                    <AttributeRow title="Dedication To Professionalism" description='I’m always looking to move forward. I believe that feedback is king and work with a fail fast mentality.' icon={<MdOutlineAutoFixHigh size={50} style={{ color: '#000000' }} />} />
                                </div>
                            </div>
                        </div>
                        <Title id="Projects" title='Projects' />
                        <div className="about__projectsgrid">
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                            <ProjectCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageAlt;