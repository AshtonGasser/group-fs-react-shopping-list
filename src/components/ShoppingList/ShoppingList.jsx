import ShoppingItem from "../ShoppingItem/ShoppingItem";
function ShoppingList ({list, getItems}){
    
    
    return (
        <>
            <h3>Shopping List</h3>
            <button type = "button" className = "btn btn-neutral" id = "resetBtn">Reset</button>
            <button type = "button" className = "btn btn-danger" id = "clearBtn">Clear</button>
            <div>
                {list.map(list => (
                    <ShoppingItem key={list.id} list={list} getItems={getItems}/>
                ))}
            </div>
        </>
    
        )
}







export default ShoppingList