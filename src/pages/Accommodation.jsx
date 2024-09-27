import { useNavigate, useParams } from "react-router-dom";
import { Carrousel, Dropdown, Footer, Loader, Navbar, Stars, Tag, ThumbProfile } from "../components";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import "./styles/accommodation.css";

export default function Accommodation() {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data, err, isLoading } = useFetch("/logements.json");

    const [accomodation, setAccomodation] = useState(null);

    const extractAccommodation = (id) => {
        if (data) {
            for (const item of data) {
                if (item?.id === id) {
                    setAccomodation(item);
                    return
                }
            }
            throw new Error("the accomodation with the id " + id + " is not exist");
        }
    }

    useEffect(() => {
        if (!isLoading) {
            try {
                extractAccommodation(id);
            } catch {
                navigate("/not-found");
            }
        }
    }, [isLoading]);

    return <>
        <main className="accomodation-page">
            <Navbar/>
            {isLoading || err? <Loader/> : (
                <Carrousel images={accomodation?.pictures}/>
            )}
            <section className="infos max-layout">
                <div className="infos__global">
                    <div className="infos__main">
                        <h1>{ isLoading || err? <Loader/> : accomodation?.title }</h1>
                        <p>{ isLoading || err? <Loader/> : accomodation?.location }</p>
                    </div>
                    <div className="infos__tags">
                        {isLoading || err? <Loader/> : accomodation?.tags.map((tag, index) => (
                            <Tag key={index}>{ tag }</Tag>
                        ))}
                    </div>
                </div>
                <div className="infos__details">
                    <ThumbProfile 
                        src={isLoading || err? "/profile_placeholder.png" : accomodation?.host.picture} 
                        alt={`Photo de profile de ${accomodation?.host?.name}`}
                        name={isLoading || err? "Undefined Undefined" : accomodation?.host?.name}    
                    />
                    <Stars stared={isLoading || err? 0 : Number(accomodation?.rating)}/>
                </div>
            </section>
            <section className="maw-layout dropdowns">
                <Dropdown summary="Description">
                    <p>{ isLoading || err? <Loader/> : accomodation?.description }</p>
                </Dropdown>
                <Dropdown summary="Équipements">
                    {isLoading || err? <Loader/> : accomodation?.equipments?.map((equipement, index) =>(
                        <p key={index}>{ equipement }</p>
                    ))}
                </Dropdown>
            </section>
        </main>
        <Footer/>
    </>
}