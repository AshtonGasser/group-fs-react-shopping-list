
import ShoppingItem from "../ShoppingItem/ShoppingItem"
function ShoppingList ({list, getItems, deleteItem}){

    const clearPage = () => {

        for (let listItem of list){
            deleteItem(listItem.id);
        }
    }
    
  
    return (
        <>
            <h3>Shopping List</h3>
            <button type = "button" className = "btn btn-neutral" id = "resetBtn">Reset</button>
            <button type = "button" className = "btn btn-danger" id = "clearBtn" onClick={clearPage}>Clear</button>
            <div>
                {list.map(list => (

                  
                    <ShoppingItem key={list.id} list={list}  getItems={getItems} deleteItem={deleteItem} />

                ))}
            </div>
        </>
    
        )
}







export default ShoppingList