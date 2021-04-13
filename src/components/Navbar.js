
import React, {
} from 'react';
import '../App.css';
import {
    Link,
    // NavLink
} from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import jonathan from "../img/jonathan.png"
export default function NavBar(location) {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex px-5  py-2 fixed-top shadow-sm">
            <div className="container">
            <Link className="navbar-brand font-weight-bolder px-3" to="/">
                <img className="img-brand" src={jonathan} alt="Jonathan"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto px-5 text-center">
                    <li className="nav-item px-3">
                        <NavLink exact activeClassName={location.location === '#contact'? '' : 'active'} to={`${process.env.PUBLIC_URL}/`}>Home</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink exact smooth activeClassName={location.location === '#contact'? 'active' : ''}  to={`${process.env.PUBLIC_URL}/#contact`}>Contact</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/works`}>Works</NavLink>
                    </li>
                    <li className="nav-item px-3">
                        <NavLink activeClassName="active"  to={`${process.env.PUBLIC_URL}/resume`} target="_blank">Resume</NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
        </header>
    )
}




