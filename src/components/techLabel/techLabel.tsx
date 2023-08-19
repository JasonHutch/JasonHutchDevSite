import { ReactNode } from "react";

export interface ITechLabelProps {
    title:string;
    icon:ReactNode;
}
const TechLabel = (props:ITechLabelProps) => {
    return (
        <div style={{display:'flex', justifyContent:'start', alignItems:'center'}}>
            {props.icon}
            <p style={{color:'black', textAlign:'left', margin:'0px'}}>{props.title}</p>
        </div>

    );
};

export default TechLabel