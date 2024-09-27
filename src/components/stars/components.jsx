import PropTypes from "prop-types";
import "./style.css";

const Stars = ({ stared }) => {
    return <div className="stars">
        {Array.from({ length: 5 }).map((_, index) => (
            <img className="stars__image" key={index} src={index < stared? "/star_fill.svg" : "/star_outline.svg"} alt="star"/>
        ))}
    </div>
}

Stars.prototype = {
    stared: PropTypes.number,
}

export default Stars;
