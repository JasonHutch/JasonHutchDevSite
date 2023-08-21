import './tag.css';
export interface ITagProps {
    title:string;
}

const Tag = (props:ITagProps) => {
    return (
        <div className='tag'>
            <p className='tag__title'>{props.title}</p>
        </div>
    )
}

export default Tag;