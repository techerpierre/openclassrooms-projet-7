import PropTypes from "prop-types";
import "./style.css";

const Thumb = ({ title, src, alt }) => {
    return <article className="thumb">
        <img src={src} alt={alt} />
        <div className="content">
            <h3>{ title}</h3>
        </div>
    </article>
}

Thumb.prototype = {
    title: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Thumb;