export interface ITagProps {
    title:string;
}

const Tag = (props:ITagProps) => {
    return (
        <div style={{border:'1px solid #000000', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p style={{color:'#000000', fontSize:'1rem', margin:'5px 12px'}}>{props.title}</p>
        </div>
    )
}

export default Tag;