import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/icons/logo.png';
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>Book Boon</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/deals">Deals</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/login">{loggedInUser?.email? 'Checkout' || loggedInUser.email: "Login"}</Link>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default Header;