import { ReactNode } from "react";

export interface IAttributeProps {
    icon: ReactNode;
    title:string;
    description:string;
}

const Attribute = (props:IAttributeProps) => {
    return (
        <div className="attribute">
            <div>
                {props.icon}
            </div>
            <div>
                <p style={{color:'#146C94', fontSize:'1.5rem', fontWeight:'600'}}>{props.title}</p>
            </div>
            <div>
                <p style={{color:'rgba(0,0,0,.5)', fontSize:'1rem', width:'230px'}}>{props.description}</p>
            </div>
        </div>

    );
}

export default Attribute;