import WorkExperienceRow from "../../components/workExperienceRow/workExperienceRow";
import './workPage.css';

const WorkPage = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
            <div className="workpage__contentWrap">
                <WorkExperienceRow/>
                <WorkExperienceRow/>
                <WorkExperienceRow/>
                
            </div>
        </div>
    );
};

export default WorkPage;