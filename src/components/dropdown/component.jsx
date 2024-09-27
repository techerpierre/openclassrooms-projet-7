import { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

const Dropdown = ({ summary, children }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return <section className="dropdown">
        <div className="max-layout dropdown__content">
            <div className="dropdown__header" onClick={() => toggleIsOpen()}>
                <h3>{ summary }</h3>
                <img src="/arrow_up.svg" className={`dropdown__status-indicator ${isOpen? "dropdown_active" : ""}`} />
            </div>
            <div className={`dropdown_children ${isOpen? "dropdown_active" : ""}`}>{ children }</div>
        </div>
    </section>
}

Dropdown.prototype = {
    summary: PropTypes.string,
    children: PropTypes.children,
}

export default Dropdown;
