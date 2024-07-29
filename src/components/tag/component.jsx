import PropTypes from "prop-types";
import "./style.css";

const Tag = ({ children }) => {
    return <div className="tag">
        <p>{ children }</p>
    </div>
}

Tag.prototype = {
    children: PropTypes.string,
}

export default Tag;
