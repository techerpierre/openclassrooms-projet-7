import PropTypes from "prop-types"
import "./style.css";

const Hero = ({ src, alt, title }) => {
    return <header className="hero">
        <div className="max-layout hero__content">
            <img className="hero__image" src={src} alt={alt} />
            <div className="hero__title">
                { title ? <h1>{ title }</h1> : undefined }
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
