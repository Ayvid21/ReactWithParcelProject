import { APP_LOGO } from '../utils/constants';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus  from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    // console.log("header rendered")

    useEffect(() => {
        // console.log("useEffect header called!")
    }, [btnName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={APP_LOGO}
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                       {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;