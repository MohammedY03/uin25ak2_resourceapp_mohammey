import { Link } from "react-router";

export default function Nav() {
    return (
        <nav>
        <Link to={"html"}>Html</Link>
        <Link to={"css"}>CSS</Link>
        <Link to={"JavaScript"}>JavaScript</Link>
        <Link to={"React"}>React</Link>
        <Link to={"Sanity"}>Sanity</Link>
        </nav>
    )
}