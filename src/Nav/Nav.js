import React from 'react';
import './Nav.css' ;
import { Link } from 'react-router-dom';
function Nav() {
    const link = {
        textDecoration:'none'
    }

        
    
    return (
        <nav>
            <Link to='/' style={link}>
                <div className="link"><a>Главная</a></div>
            </Link>
            <Link to='/photos' style={link}>
                <div className="link"><a>Фотосесии</a></div>
            </Link>
            <div className="link"><a>Пленка</a></div>
            <div className="link"><a>Цены</a></div>
            <div className="link"><a>Обо мне</a></div>
        </nav>
  );
}

export default Nav;
