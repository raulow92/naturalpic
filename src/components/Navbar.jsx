import "../assets/css/navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="nav-l">
                <Link to="/">
                    <h1>
                        NATURAL<span>PIC</span>
                    </h1>
                    </Link>
                </div>
                <div className="nav-r">
                    <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>HOME</NavLink>
                    <NavLink to="/gallery">GALLERY</NavLink>
                    <NavLink to="/favorites">FAVORITES</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
