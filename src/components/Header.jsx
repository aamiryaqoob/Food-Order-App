import React from 'react'
import Logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={Logo} alt="Logo" />
                <h1>React Food Order</h1>
            </div>
            <nav>
                <button>Cart(0)</button>
            </nav>
        </header>
    )
}

export default Header