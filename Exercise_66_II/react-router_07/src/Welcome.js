import { Link, useParams } from "react-router-dom";

export function Welcome(props) {
  const {username} = useParams();
  return (
    <div className="welcome">
      <h1>Welcome {username !== "undefined" ? username : ""}! 😃</h1>
      <Link to={`/counter/${username}`}>Start the Counter now ⏳ </Link> or
      <Link to={`/users/newUser/${username}`}> Find out your userProfile </Link>
    </div>
  );
}
