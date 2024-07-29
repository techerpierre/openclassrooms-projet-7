import PropTypes from "prop-types";
import "./style.css";

const ThumbProfile = ({src, alt, name}) => {
    return <div className="thumb-profile">
        <div className="name">
            <p>{ name?.split(" ")[0] }</p>
            <p>{ name?.split(" ")[1] }</p>
        </div>
        <img src={src} alt={alt} />
    </div>
}

ThumbProfile.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
}

export default ThumbProfile;
