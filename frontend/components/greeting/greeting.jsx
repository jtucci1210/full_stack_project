import React from 'react';
import { Link } from 'react-router-dom';
import { dropDownList } from '../dropdown/dropdown';



const Greeting = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group-logged-in">
            <Link to="/" className="header-link-explore"><nav>Explore</nav></Link>
            <div className="dropdown">
                <div onClick={() => dropDownList()} className="dropbtn"> 
                    <a className="fas fa-user-circle"></a>
                    <div id="myDropdown" className="dropdown-content">
                            <Link to={`/users/${currentUser.id}`}>Profile</Link>
                            <Link onClick={() => logout()} to="/">Logout</Link>
                    </div>
                </div> 
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;