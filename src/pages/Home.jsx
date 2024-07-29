import { Footer, Gallery, Hero, Loader, Navbar, Thumb } from "../components";
import { useFetch } from "../hooks";

export default function Home() {

    const { data, error, isLoading } = useFetch("/logements.json")

    return <>
        <main className="screen-height">
            <Navbar/>
            <Hero src="/hero.png" alt="image de la côte" title="Chez vous, partout et ailleurs"/>
            <Gallery>
                { isLoading || error? <Loader size={30}/> : data.map((element) => (
                    <a key={element?.id} href={`/${element?.id}`}>
                        <Thumb title={element?.title} src={element?.cover} alt={element?.description}/>
                    </a>
                )) }
            </Gallery>
        </main>
        <Footer/>
    </> 
}