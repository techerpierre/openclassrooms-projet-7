import PropTypes from "prop-types";
import "./style.css";

const Loader = ({ size }) => {
    return <img src="/loader.svg" alt="loader" style={{ width: (size | 25) + "px", heigh: (size || 25) + "px" }} className="loader"/>
}

Loader.prototype = {
    size: PropTypes.string,
}

export default Loader;