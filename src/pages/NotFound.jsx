import { Link } from "react-router-dom";
import "./styles/not-found.css";

export default function NotFound() {
    return <>
        <main className="not-found-page">
            <section className="not-found">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
        </main>
    </>
}