import './tag.css';
export interface ITagProps {
    title:string;
    projectTag?:boolean;
}

const Tag = (props:ITagProps) => {
    return (
        props.projectTag ? 
        <div className='projectTag'>
            <p className='projectTag__title'>{props.title}</p>
        </div>
        :
        <div className='tag'>
            <p className='tag__title'>{props.title}</p>
        </div>
    )
}

export default Tag;