import { useNavigate, useParams } from "react-router-dom";
import { Carrousel, Dropdown, Loader, Stars, Tag, ThumbProfile } from "../components";
import "./styles/accommodation.css";
import { useLogement } from "../hooks";

export default function Accommodation() {

    const navigate = useNavigate();
    const { logement, err, isLoading } = useLogement(useParams().id, () => navigate("/not-found"));

    return <>
        <main className="accomodation-page">
            {isLoading || err? <Loader/> : (
                <Carrousel images={logement?.pictures}/>
            )}
            <section className="infos max-layout">
                <div className="infos__global">
                    <div className="infos__main">
                        <h1>{ isLoading || err? <Loader/> : logement?.title }</h1>
                        <p>{ isLoading || err? <Loader/> : logement?.location }</p>
                    </div>
                    <div className="infos__tags">
                        {isLoading || err? <Loader/> : logement?.tags.map((tag, index) => (
                            <Tag key={index}>{ tag }</Tag>
                        ))}
                    </div>
                </div>
                <div className="infos__details">
                    <ThumbProfile 
                        src={isLoading || err? "/profile_placeholder.png" : logement?.host.picture} 
                        alt={`Photo de profile de ${logement?.host?.name}`}
                        name={isLoading || err? "Undefined Undefined" : logement?.host?.name}    
                    />
                    <Stars stared={isLoading || err? 0 : Number(logement?.rating)}/>
                </div>
            </section>
            <section className="maw-layout dropdowns">
                <Dropdown summary="Description" data={logement?.description} loading={isLoading}/>
                <Dropdown summary="Équipements" data={logement?.equipments} loading={isLoading}/>
            </section>
        </main>
    </>
}