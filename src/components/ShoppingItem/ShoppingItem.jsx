
function ShoppingItem({list}){
return(
    <>

        <div>
            <p>{list.name}</p> 
            <p>{list.quantity} {list.unit}</p>
            <button>Buy</button>
            <button>Remove</button>
        </div>

    </>
)

}

export default ShoppingItem