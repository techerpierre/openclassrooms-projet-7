import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {

    const location = useLocation();

    const handleCurrent = (path) => location.pathname === path ? "navbar_current" : "";

    return <nav className="navbar">
        <div className="max-layout navbar__content">
            <img src="/logo_primary.svg" alt="logo de kasa" className="navbar__logo" />
            <div className="navbar__links">
                <Link className={`navbar__link ${handleCurrent("/")}`} to="/">Accueil</Link>
                <Link className={`navbar__link ${handleCurrent("/about")}`} to="/about">A Propos</Link>
            </div>
        </div>
    </nav>
}

export default Navbar;
