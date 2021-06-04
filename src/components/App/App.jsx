import React from 'react';
import axios from "axios";
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    // post
    const addItem = (newItem) => {
        console.log(newItem);
         // ⬇ POST your data here
         axios.post(".list", newItem)
         .then(response => {
             console.log('response', response);
             // get function here ***
         }).catch(error => {
             console.log(error)
         })
    }
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
