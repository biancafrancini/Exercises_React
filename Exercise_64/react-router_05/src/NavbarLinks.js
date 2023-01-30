import React from "react";
import {Link, useParams} from "react-router-dom";

export function NavbarLinks() {
    const { username } = useParams();
  return (
    <div className="nav-container">
      <nav>
        <Link to={`/${username}`}> Homepage </Link>
        <Link to={`/counter/${username}`}> Your personal Counter </Link>
        <Link to={`/users/${username}`}> Users Profile</Link>
      </nav>
    </div>
  );
}
