import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList'
import './App.css';
import Button from 'react-bootstrap/Button'
import ShoppingForm from '../ShoppingForm/ShoppingForm'


function App() {

    const [shoppingList, setShoppingList] = useState([])
    // create a function that will GET the data from the server
    const getItems = () => {
    // use axios to contact the server and specify what route you want to receive data from 
        axios.get('/list')
        .then(response => {
            // responds with DB data
            console.log('Response from server', response)
            setShoppingList(response.data)
            // set the data here
        })
        // catch for error
        .catch(error => {
            console.log('Error getting data from server', error);
        })
    }

    // post
    const addItem = (newItem) => {
        console.log(newItem);
         // ⬇ POST your data here

         axios.post("/list", newItem)


         .then(response => {
             console.log('response', response);
             getItems()
         }).catch(error => {
             console.log(error)
         })
    }

    const deleteItem = (key) => {

        axios.delete(`/list/${key}`)
        .then( response => {
            console.log("Item was deleted. Server responded with:", response);
            getItems();
        }).catch ( err => {
            console.log('There was a problem with deleting the item', err);
        });
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <div className="App">
            <Header />
            <ShoppingForm addItem={addItem} />
            <main>

                <p>Under Construction...</p>
                <ShoppingList list={shoppingList} getItems={getItems} deleteItem={deleteItem} />

            </main>
        </div>
    );
}

export default App;
