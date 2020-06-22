import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div style={{ background: "yellow", color: "white" }}>
            <nav>
                <ul>
                    <li>
                        {/* <a href="/">Home</a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/products">Topics</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard / Protected</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}