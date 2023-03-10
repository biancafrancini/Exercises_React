import { Link, useParams } from "react-router-dom";
import { NavbarLinks } from "./NavbarLinks";

export function Welcome(props) {
  const { username } = useParams();
  return (
    <div className="welcome">
      <NavbarLinks />
      <h1>Welcome {username}! 😃</h1>
      <Link to={`/counter/${username}`}>Start the Counter now ⏳ </Link> or
      <Link to={`/users`}> Find out your userProfile </Link>
    </div>
  );
}
