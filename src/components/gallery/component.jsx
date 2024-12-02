import PropTypes from "prop-types";
import "./style.css";
import { useLogements } from "../../hooks";
import Loader from "../loader/component";
import Thumb from "../thumb/component";

const Gallery = () => {
    const { data, error, isLoading } = useLogements();

    return <section className="gallery">
        <div className="max-layout gallery__content">
            { isLoading || error? <Loader size={30}/> : data.map((element) => (
                <a key={element?.id} href={`/${element?.id}`}>
                    <Thumb title={element?.title} src={element?.cover} alt={element?.description}/>
                </a>
            )) }
        </div>
    </section>
}

export default Gallery