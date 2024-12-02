import { Dropdown, Hero } from "../components";

const dropdowns = [
    {
        key: "dropdown_1",
        summary: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
        key: "dropdown_2",
        summary: "Respect",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        key: "dropdown_3",
        summary: "Service",
        content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        key: "dropdown_4",
        summary: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]

export default function About() {
    return <>
        <main>
            <Hero src="/hero_2.png" alt="image de montagnes"/>
            { dropdowns.map(dropdown => (
                <Dropdown key={dropdown.key} summary={dropdown.summary} data={dropdown.content}/>
            )) }
        </main>
    </>
}