import ShoppingItem from "../ShoppingItem/ShoppingItem"
// import {Button} from 'react-bootstrap/Button';
function ShoppingList ({list, deleteItem}){
    
    
    return (
        <>
            <h3>Shopping List</h3>
            <button type = "button" className = "btn btn-neutral" id = "resetBtn">Reset</button>
            <button type = "button" className = "btn btn-danger" id = "clearBtn">Clear</button>
            <div>
                {list.map(list => (
                    <ShoppingItem key={list.id} list={list} deleteItem={deleteItem} />
                ))}
            </div>
        </>
    
        )
}







export default ShoppingList