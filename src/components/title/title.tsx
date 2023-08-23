import './title.css';

export interface ITitleProps {
    id:string;
    title:string;
};

const Title = (props:ITitleProps) => {
    return (
        <div className='headerTitle'>
            <h2 id={props.id}>{props.title}</h2>
        </div>
    );
};

export default Title;