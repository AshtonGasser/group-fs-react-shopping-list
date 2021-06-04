import { useState } from 'react';

function ShoppingForm(props) {

    // variables to hold our list item properties (for the post)
    const [grocery, setGrocery] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    // this function will run when the submit is clicked
    const handleSubmit = (evt) => {

        // prevent page load
        event.preventDefault();

        // make obj.
        const shoppingListItem = {
            name: grocery,
            quantity: quantity,
            unit: unit
        }
        console.log(shoppingListItem)
        
        // send obj. to the post
        props.addItem(shoppingListItem);

        // clear inputs
        clearIn();
    }

    const clearIn = () => {
        setGrocery('');
        setQuantity('');
        setUnit('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Add an Item</h2>
                <label>Item: </label>
                <input type="text" onChange={(evt) => setGrocery(evt.target.value)} value={grocery} />
                <label>Quantity: </label>
                <input type="text" onChange={(evt) => setQuantity(evt.target.value)} value={quantity} />
                <label>Unit: </label>
                <input type="text" onChange={(evt) => setUnit(evt.target.value)} value={unit} />
                <button type="submit">Save</button>
            </form>
        </>
    )
}

export default ShoppingForm;