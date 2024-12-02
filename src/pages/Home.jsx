import { Gallery, Hero } from "../components";

export default function Home() {
    return <>
        <main className="screen-height">
            <Hero src="/hero.png" alt="image de la côte" title="Chez vous, partout et ailleurs"/>
            <Gallery/>
        </main>
    </> 
}