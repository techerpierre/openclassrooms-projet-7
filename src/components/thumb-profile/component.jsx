import PropTypes from "prop-types";
import "./style.css";

const ThumbProfile = ({src, alt, name}) => {
    return <div className="thumb-profile">
        <div className="thumb-profile__name">
            <p className="thumb-profile__label">{ name?.split(" ")[0] }</p>
            <p className="thumb-profile__label">{ name?.split(" ")[1] }</p>
        </div>
        <img className="thumb-profile__image" src={src} alt={alt} />
    </div>
}

ThumbProfile.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
}

export default ThumbProfile;
