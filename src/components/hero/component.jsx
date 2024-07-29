import PropTypes from "prop-types"
import "./style.css";

const Hero = ({ src, alt, title }) => {
    return <header className="hero">
        <div className="max-layout content">
            <img src={src} alt={alt} />
            <div className="title">
                <h1>{ title }</h1>
            </div>
        </div>
    </header>
}

Hero.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
}

export default Hero;
