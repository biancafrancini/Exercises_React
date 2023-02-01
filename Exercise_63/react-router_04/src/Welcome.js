import { Link, useParams } from "react-router-dom";

export function Welcome(props) {
  const {username} = useParams();
  return (
    <div className="welcome">
      <h1>Welcome <strong>{props.name}</strong>! 😃</h1>
      <Link to={`/counter`}>Start the Counter now ⏳ </Link> or
      <Link to={`/users/${username}`}> Find out your userProfile </Link>
    </div>
  );
}
