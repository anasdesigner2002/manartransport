import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

export default function NotFound() { return <section className="search-page container"><span className="eyebrow">404 / Route not found</span><h1>That road<br /><em>isn’t on the map.</em></h1><p>Try returning home or exploring the services and fleet.</p><Link className="gold-button" href="/">Back home <FontAwesomeIcon icon={faArrowLeft} /></Link></section>; }
