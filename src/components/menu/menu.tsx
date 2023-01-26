import React from 'react';
import './menu.scss';
import logo from '../../resources/logo.svg';

export function Menu() {
    return (
        <header className="menu">
            <div className="menu__logo"><img src={logo} alt="Synoname"/></div>
            <div className="menu__items">
                <div className="menu__item">Settings</div>
            </div>
        </header>
    );
}