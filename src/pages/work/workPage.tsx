import WorkExperienceRow from "../../components/workExperienceRow/workExperienceRow";
import './workPage.css';

const WorkPage = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
            <div className="workpage__contentWrap">
                <WorkExperienceRow position={""} company={""} startDate={""} endDate={""} description={[]}/>
                TST
                <WorkExperienceRow position={""} company={""} startDate={""} endDate={""} description={[]}/>
                <WorkExperienceRow position={""} company={""} startDate={""} endDate={""} description={[]}/>
            </div>
        </div>
    );
};

export default WorkPage;