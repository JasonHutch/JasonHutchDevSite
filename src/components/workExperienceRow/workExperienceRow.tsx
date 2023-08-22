import './workExpereinceRow.css';
export interface IWorkExperienceRowProps {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[];
}
const WorkExperienceRow = (props:IWorkExperienceRowProps) => {
    return (
        <div className="workExperienceRow">
            <div className='workExperienceRow__details'>
                <p style={{fontSize:'1.5rem', fontWeight:'700', textAlign:'left', color:'#19A7CE'}}>{props.position}</p>
                <p style={{fontSize:'1rem', textAlign:'left'}}>{props.company}</p>
                <p style={{fontSize:'1rem', textAlign:'left', color:'rgba(0,0,0,0.5)'}}>{props.startDate} - {props.endDate}</p>
            </div>
            <div className='workExperienceRow__description'>
                <ul>
                    {
                        props.description.map((desc) => {
                            return (
                                <li>{desc}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default WorkExperienceRow;