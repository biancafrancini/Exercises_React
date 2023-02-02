import { Link } from "react-router-dom";

export function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Welcome <strong>{props.name}</strong>! 😃</h1>
      <Link to="/counter">Start the Counter now ⏳ </Link> or
      <Link to="/users"> Search new users 🔎</Link>
    </div>
  );
}