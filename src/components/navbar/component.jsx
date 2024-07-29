import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {

    const location = useLocation();

    const handleCurrent = (path) => location.pathname === path ? "current" : "";

    return <nav className="navbar">
        <div className="max-layout content">
            <img src="/logo_primary.svg" alt="logo de kasa" className="logo" />
            <div className="links">
                <Link className={handleCurrent("/")} to="/">Accueil</Link>
                <Link className={handleCurrent("/about")} to="/about">A Propos</Link>
            </div>
        </div>
    </nav>
}

export default Navbar;
