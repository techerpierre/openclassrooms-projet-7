import PropTypes from "prop-types";
import "./style.css";

const Tag = ({ children }) => {
    return <div className="tag">
        <p className="tag__label">{ children }</p>
    </div>
}

Tag.prototype = {
    children: PropTypes.string,
}

export default Tag;
