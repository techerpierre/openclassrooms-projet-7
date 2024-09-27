import PropTypes from "prop-types";
import "./style.css";
import { useState } from "react";

const Carrousel = ({ images }) => {

    const maxCountValue = images?.length - 1;
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        if (count < maxCountValue)
            setCount(count+1);
        else
            setCount(0);
    }

    const decrementCounter = () => {
        if (count > 0)
            setCount(count-1);
        else
            setCount(maxCountValue)
    }

    return <section className="carrousel">
        <div className="max-layout carrousel__content">
            <div className="carrousel__images" style={{left: `${100 * (- count)}%`}}>
            {images?.map((image, index) => (
                <img key={index} src={image} className="carrousel__image"/>
            ))}
            </div>
            {maxCountValue > 0 ? (
                <>
                    <div onClick={decrementCounter} className="carrousel__arrow carrousel__arrow-left">
                        <img src="/arrow_left.svg" />
                    </div>
                    <div onClick={incrementCounter} className="carrousel__arrow carrousel__arrow-right" >
                        <img src="/arrow_right.svg"/>
                    </div>
                    <p className="carrousel__counter">{ `${count + 1}/${maxCountValue + 1}` }</p>
                </>
            ) : null}
        </div>
    </section>
}

Carrousel.prototype = {
    images: PropTypes.arrayOf(PropTypes.string),
}

export default Carrousel;
