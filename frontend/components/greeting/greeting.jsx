import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



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
            <FontAwesomeIcon icon={faUserCircle}/>
        </hgroup>
    );

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;