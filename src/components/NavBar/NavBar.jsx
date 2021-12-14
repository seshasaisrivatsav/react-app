import React from 'react';
import { useHistory } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    const history = useHistory();
    return (
        <ul>
            <li><a onClick={() => history.push('/dashboard')} href=''>Dashboard</a></li>
            <li><a onClick={() => history.push('/incrementor')} href=''>Incrementor</a></li>
            <li><a onClick={() => history.push('/register')} href=''>Register</a></li>
            <li><a onClick={() => history.push('/login')} href=''>Login</a></li>
        </ul>
    );
};

export default NavBar;