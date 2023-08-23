import Attribute from '../../components/attribute/attribute';
import Tag from '../../components/tag/tag';
import './aboutPage.css';

import { MdOutlineAutoFixHigh } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { LiaSmileBeam } from "react-icons/lia";
import { BsCodeSlash } from "react-icons/bs";






const AboutPage = () => {

    const languages = ['Typescript', 'C#', 'Python', 'Java', 'HTML', 'CSS', 'SQL'];
    const tools = ['.NET Core', 'React', 'Docker', 'Synapse Analytics', 'PySpark', 'Pandas'];
    const certs = ['Microsoft Certified: Azure AI Fundamentals', 'Microsoft Certified: Azure AI Fundamentals'];
    return (
        <div className='about'>
            <div className="about__contentWrap">
                <div>
                    <div className='about__titleWrap'>
                        <p style={{ color: '#000000', fontSize: '3rem', margin:'30px 0px' }}>About</p>
                    </div>
                    <div style={{display:'flex', paddingBottom:'2rem'}}>
                        <div className="about__leftContent">
                            <div>
                                <p className='about__aboutText'>My Name is Jason Hutchinson. I’m a software developer based out of Dallas, TX. I specialize in full stack development, leveraging technologies such as React, Azure Cloud Services, .NET Core, and SQL to deliver scalable web applications. </p>
                            </div>
                            <div className="about__leftContentGrid">
                                <p style={{ color: '#000000', fontSize: '1.5rem' }}>Languages</p>
                                <div className='about__grid'>
                                    {
                                        languages.map((langauge) => {
                                            return (
                                                <Tag title={langauge} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="about__leftContentGrid">
                                <p style={{ color: '#000000', fontSize: '1.5rem' }}>Tools</p>
                                <div className='about__grid'>
                                    {
                                        tools.map((langauge) => {
                                            return (
                                                <Tag title={langauge} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="about__leftContentGrid">
                                <p style={{ color: '#000000', fontSize: '1.5rem' }}>Certifications</p>
                                {
                                    certs.map((cert) => {
                                        return (
                                            <p style={{ color: 'rgba(0,0,0,.5)', margin: '5px 0px' }}>{cert}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'20px', margin:'0px 20px'}}>
                            <div className='about__horizontalDivider'></div>
                        </div>
                        
                        <div className="about__rightContent">
                            <div className='about__rightContentGrid'>
                                <Attribute title="Solution Oriented" description='I’m always looking to move forward. I believe that feedback is king and work with a fail fast mentality.' icon={<MdOutlineAutoFixHigh size={50} style={{ color: '#000000' }} />} />
                                <Attribute title="Self Starter" description='II find my initiative is driven by curiosity and manifests in getting results quicker' icon={<AiOutlineFire size={50} style={{ color: '#000000' }} />} />
                                <Attribute title="Foolishly Optimistic" description='Attitude is contagious and my goal in work and life is to inspire those around me by kicking ass with a big ol smile on my face.' icon={<LiaSmileBeam size={50} style={{ color: '#000000' }} />} />
                                <Attribute title="Learns By Doing" description='I believe the  best way to learn something is to try things and make mistakes.' icon={<BsCodeSlash size={50} style={{ color: '#000000' }} />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;