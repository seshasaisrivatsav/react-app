import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Incrementor from "./components/Incrementor/Incrementor";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Dashboard from "./components/Dashboard/Dashboard";
import './App.css';
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="App">
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/incrementor" component={Incrementor}/>
                <Route path="/Dashboard" component={Dashboard} />
            </div>
        </BrowserRouter>
    );
};

export default App;
