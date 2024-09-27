import PropTypes from "prop-types";
import "./style.css";

const Thumb = ({ title, src, alt }) => {
    return <article className="thumb">
        <img className="thumb__image" src={src} alt={alt} />
        <div className="thumb__content">
            <h3 className="thumb__title">{title}</h3>
        </div>
    </article>
}

Thumb.prototype = {
    title: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Thumb;