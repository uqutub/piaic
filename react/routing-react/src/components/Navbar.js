import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home Link</Link>
                </li>
                <li>
                    <Link to="/about">About Link</Link>
                </li>
                <li>
                    <Link to="/users">Users Link</Link>
                </li>
                <li>
                    <Link to="/contact">Contact-us</Link>
                </li>
            </ul>
        </nav>
    );
}

