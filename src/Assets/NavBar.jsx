import React from "react";
import logo from "./images/mcdonalds-logo-footer-bg-white.png";

const Slogan = () => <p>Me encanta!</p>

const Navbar = () => {
    return (
        <div className="container">
            <ul class="nav d-flex align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48" alt="McDonalds" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_NavBar" href="#">Productos</a>
                </li>
                <li cclassName="nav-item">
                    <a className="nav-link link_NavBar" href="#">Locales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_NavBar" href="#">En Familia</a>
                </li>
            </ul>
            <Slogan />
        </div>
    )
}

export default Navbar