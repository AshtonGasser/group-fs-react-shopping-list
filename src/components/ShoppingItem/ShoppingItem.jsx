import {useState} from 'react'
import axios from 'axios'

function ShoppingItem({list, getItems}){

    const [isHidden, setIsHidden] = useState(false)

    const handleBuy = () => {
        console.log(list);
    
        const data = {
            purchased: !list.purchased
        }
        axios.put(`/list/${list.id}`, data).then(response => {
            console.log(response)
            // get
            getItems()
        }).catch(error => {
            console.log(`Log the ${error}`)
        })
    }
return(
    <>

        <div className="listItem">
        { isHidden ? (
            <div>
                HIDDEN
            </div>
        ) : (
            <div>
                {list.purchased && <p>Purchased</p>}
                <p>{list.name}</p> 
                <p>{list.quantity} {list.unit}</p>
            </div>
        )}
            <button onClick={handleBuy}>Buy</button>
            <button>Remove</button>
        </div>

    </>
)

}

export default ShoppingItem

