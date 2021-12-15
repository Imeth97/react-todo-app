const Title = (props) => {
    
    
    const listName = props.data;
    
    return ( 
        <div className="Title">
            <h1>{ listName }</h1>
        </div>
     );
}
 
export default Title;