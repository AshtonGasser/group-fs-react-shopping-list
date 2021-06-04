import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    
    // create a function that will GET the data from the server
    const getItems = () => {
    // use axios to contact the server and specify what route you want to receive data from 
        axios.get('/list')
        .then(response => 
            // responds with DB data
            console.log('Response from server', response)

            // set the data here
        )
        // catch for error
        .catch(error => {
            console.log('Error getting data from server', error);
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
