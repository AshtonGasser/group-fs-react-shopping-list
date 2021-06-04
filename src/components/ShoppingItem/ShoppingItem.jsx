
function ShoppingItem({list, deleteItem}){

    const removeItem = () => {
        deleteItem(list.id);
    }

return (
    <>

        <div>
            <p>{list.name}</p> 
            <p>{list.quantity} {list.unit}</p>
            <button>Buy</button>
            <button onClick={removeItem} >Remove</button>
        </div>

    </>
)

}

export default ShoppingItem