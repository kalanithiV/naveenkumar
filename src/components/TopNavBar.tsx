import React from 'react';
import { Link } from 'react-router-dom';
import "..//styles/TopNavBar.css";
import logo from "../images/Hungery_Monster.jpeg"

const TopNavBar: React.FC = () => {
    return(
        <nav className="top-nav">   
            <div className="nav-left">
                <img src={logo} alt="Logo" className="logo"/>
                <h1 className="Moster_img">Hungry Moster</h1>
            </div>
            <ul className="nav-right"> 
                <li><Link to="/" className="home_link">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Recipes</Link></li>
                <li><Link to="/">Blog</Link></li>   
            </ul>
        </nav>
    );
};
export default TopNavBar;
