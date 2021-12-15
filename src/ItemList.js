

const ItemList = (props) => {
    
    const items = props.data;
    console.log(items)

    return ( 
        <div className="ItemList">
            { 
                items.map((item) => (
                    
                    
                    <div className="item">
                        <h4>{item}</h4>
                        <br />
                    </div>

                ))
            
            }
                

            

            
        </div>
        
     );
}
 
export default ItemList;