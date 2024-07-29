import PropTypes from "prop-types";
import "./style.css";

const Gallery = ({ children }) => {
    return <section className="gallery">
        <div className="max-layout content">{ children }</div>
    </section>
}

Gallery.prototype = {
    children: PropTypes.children,
}

export default Gallery