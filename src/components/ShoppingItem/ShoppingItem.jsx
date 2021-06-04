
function ShoppingItem({item}){
return(
    <>

        <div>
            <p>{item.name}</p> 
            <p>{item.quantity} {item.unit}</p>
            <button>Buy</button>
            <button>Remove</button>
        </div>

    </>
)

}

export default ShoppingItem