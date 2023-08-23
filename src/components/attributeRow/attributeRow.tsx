import { ReactNode } from "react";
import './attributeRow.css'

export interface IAttributeProps {
    icon: ReactNode;
    title:string;
    description:string;
}

const AttributeRow = (props:IAttributeProps) => {
    return (
        <div className="attributeRow">
            <div className="attributeRow__imgWrap">
                {props.icon}
            </div>
            <div style={{width:'100%'}}>
                <p className="attributeRow__Title">{props.title}</p>
                <p className="attributeRow__subTitle">{props.description}</p>
            </div>
        </div>
    );
}

export default AttributeRow;