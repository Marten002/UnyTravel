import React, { Component } from 'react';
import './NavItem.css';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'menu__link--active',
        }
    };

    render() {

        let nav__item = this.props.nav__item;
        
        return (
            <div className="nav__menu menu">
                <ul className="menu__list">
                    {Object.keys(nav__item).map((elem, index) => {
                        return <li key={index} data-item={index} className="menu__item">
                                    <Link to={nav__item[elem]} className="menu__link">{elem}</Link>
                                    {/* <a href={nav__item[elem]} className="menu__link">{elem}</a> */}
                                </li> 
                    })}
                </ul>
            </div>
        );
    }
}

export default NavItem;
