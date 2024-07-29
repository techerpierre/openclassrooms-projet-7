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
        <div className="max-layout content">
            <div className="images" style={{left: `${100 * (- count)}%`}}>
            {images?.map((image, index) => (
                <img key={index} src={image} className="image"/>
            ))}
            </div>
            {maxCountValue > 0 ? (
                <>
                    <div onClick={decrementCounter} className="arrow-left">
                        <img src="/arrow_left.svg" />
                    </div>
                    <div onClick={incrementCounter} className="arrow-right" >
                        <img src="/arrow_right.svg"/>
                    </div>
                    <p className="counter">{ `${count + 1}/${maxCountValue + 1}` }</p>
                </>
            ) : null}
        </div>
    </section>
}

Carrousel.prototype = {
    images: PropTypes.arrayOf(PropTypes.string),
}

export default Carrousel;
