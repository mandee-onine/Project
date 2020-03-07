import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="nav-wrapper" style={{ overflow: "hidden" }}>
            <div className="container-fluid" style={{ paddingLeft: "70px" }}>
                <Link to="/Home" className="brand-logo"><img src="images/Mandee.jfif" alt="" style={{ fontSize: "60px", height: "100px", width: "80px" }}></img></Link>
                <ul className="right">
                    {/* <li><Link to="/Home" style={{ color: "black" }}>Shop</Link></li> */}
                    {/* <li><Link to="/cart">My cart</Link></li> */}
                    <li><Link to="/cart"><i className="material-icons" style={{ fontSize: "50px", width: "40px" }}>shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;