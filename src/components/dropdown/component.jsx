import { useState } from "react";
import PropTypes, { element } from "prop-types";
import "./style.css";
import Loader from "../loader/component";

const Dropdown = ({ summary, data, loading = false }) => {    
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return <section className="dropdown">
        <div className="max-layout dropdown__content">
            <div className="dropdown__header" onClick={() => !loading && toggleIsOpen()}>
                <h3>{ summary }</h3>
                {
                    loading ? <Loader/> : (
                        <img src="/arrow_up.svg" className={`dropdown__status-indicator ${isOpen? "dropdown_active" : ""}`} />
                    )
                }
            </div>
            {
                !loading ? (
                    <div className={`dropdown_children ${isOpen? "dropdown_active" : ""}`}>{
                        Array.isArray(data) ? (
                            <ul className="dropdown_children__list">
                                {
                                    data.map((item, index) => (
                                        <li key={index}>{ item }</li>
                                    ))
                                }
                            </ul>
                        ) : (
                            <p>{ data }</p>
                        )
                    }</div>
                ) : undefined
            }
        </div>
    </section>
}

Dropdown.prototype = {
    summary: PropTypes.string,
    children: PropTypes.string | PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool,
}

export default Dropdown;
