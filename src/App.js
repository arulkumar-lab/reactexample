import React, { Component } from 'react';
import Input from './components/input/Input'
import Home from './module/home'
/*
* App component to display below options
* 1. Loading cursor and components
* 2. Home page component insert
* */
function App() {
    return (
        <React.Fragment>
        <div className="App">
            <Input />
            <Home />
        </div>
        </React.Fragment>
    );
}

export default App;
