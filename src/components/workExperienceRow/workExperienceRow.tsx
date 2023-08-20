import './workExpereinceRow.css';

const WorkExperienceRow = () => {
    return (
        <div className="workExperienceRow">
            <div className='workExperienceRow__details'>
                <p style={{fontSize:'1.5rem', fontWeight:'700', textAlign:'left'}}>Senior Software Engineer</p>
                <p style={{fontSize:'1rem', textAlign:'left'}}>Rightpoint</p>
                <p style={{fontSize:'1rem', textAlign:'left', color:'rgba(0,0,0,0.5)'}}>Jan 2022 - Present</p>
            </div>
            <div style={{width:'50%'}}>
                <p style={{textAlign:'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt libero eu est dignissim dignissim. Nam hendrerit finibus neque eu porttitor. Suspendisse malesuada enim quis dolor imperdiet, ut condimentum lacus lacinia. In a ornare </p>
            </div>
        </div>
    );
}

export default WorkExperienceRow;