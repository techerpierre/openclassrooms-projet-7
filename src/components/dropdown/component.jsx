import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const Dropdown = ({ summary, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return <section className="dropdown">
        <div className="max-layout content">
            <div className="header" onClick={() => toggleIsOpen()}>
                <h3>{ summary }</h3>
                <img src="/arrow_up.svg" className={`status-indicator ${isOpen? "active" : ""}`} />
            </div>
            <div className={`children ${isOpen? "active" : ""}`}>{ children }</div>
        </div>
    </section>
}

Dropdown.prototype = {
    summary: PropTypes.string,
    children: PropTypes.children,
}

export default Dropdown;
