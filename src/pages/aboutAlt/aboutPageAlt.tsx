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
import { ATTRIBUTES, CERTIFICATIONS, LANGUAGES, PROJECTS, TOOLS, WORKEXPERIENCE } from '../../Config';
import { IWorkExperience } from '../../models/IWorkExperience';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';



const AboutPageAlt = () => {

    const divRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if(location.state && location.state.back === true){
            window.history.replaceState({}, document.title);
            divRef.current.scrollIntoView();
        }
      },[]);

    const getIcon = (icon:string) => {
        switch (icon) {
            case 'fire':
                return <AiOutlineFire size={50} style={{ color: '#000000' }} />
            case 'smile':
                return <LiaSmileBeam size={50} style={{ color: '#000000' }} />
            case 'code':
                return <BsCodeSlash size={50} style={{ color: '#000000' }} />
            case 'magic':
                return <MdOutlineAutoFixHigh size={50} style={{ color: '#000000' }} />
            default:
                return <AiOutlineFire size={50} style={{ color: '#000000' }} />
        }
    }

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

                        <div id="WorkExperience" className='anchor'></div>
                        <Title id="" title='Work Experience' />
                        <div className='aboutPage__experience'>
                            {
                                WORKEXPERIENCE.map((experience:IWorkExperience) => {
                                    return (
                                        <WorkExperienceRow 
                                            position={experience.position}
                                            company={experience.company}
                                            startDate={experience.dateStart}
                                            endDate={experience.dateEnd}
                                            description={experience.description}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div id="AboutMe" className='anchor'></div>
                        <Title id="" title='About Me' />
                        <div className="aboutAlt__aboutMe">
                            <div className="aboutAlt__leftContent">
                                <div className="aboutAlt__leftContentGrid">
                                    <p style={{ color: '#19A7CE', fontSize: '1.5rem', marginBottom:'1rem' }}>Languages</p>
                                    <div className='aboutAlt__grid'>
                                        {
                                            LANGUAGES.map((langauge) => {
                                                return (
                                                    <Tag title={langauge} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="aboutAlt__leftContentGrid">
                                    <p style={{ color: '#19A7CE', fontSize: '1.5rem', marginBottom:'1rem'}}>Tools</p>
                                    <div className='aboutAlt__grid'>
                                        {
                                            TOOLS.map((tool) => {
                                                return (
                                                    <Tag title={tool} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="aboutAlt__leftContentGrid">
                                    <p style={{ color: '#19A7CE', fontSize: '1.5rem', marginBottom:'1rem' }}>Certifications</p>
                                    <div className='aboutAlt__grid-OneCol'>
                                        {
                                            CERTIFICATIONS.map((cert) => {
                                                return (
                                                    <Tag title={cert} />
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="aboutAlt__rightContent">
                                <div className='keyAttributes' >
                                    <Title id="keys" title='Key Attributes' />
                                </div>
                                
                                <div className='aboutAlt__rightContentWrap'>
                                    {
                                        ATTRIBUTES.map((attribute) => {
                                            return (
                                                <AttributeRow title={attribute.title} description={attribute.description} icon={getIcon(attribute.icon)} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div id="Projects" className='anchor' ref={divRef}></div>
                        <Title id="" title='Projects' />
                        <div className="about__projectsgrid">
                            {
                                PROJECTS.map((project) => {
                                    return (
                                        <ProjectCard project={project} />
                                    )
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPageAlt;