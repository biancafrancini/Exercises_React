import { Link } from "react-router-dom";

export function Welcome(props) {
  return (
    <div className="welcome">
      <p>
        Welcome <strong>{props.name}</strong>! 😃
      </p>
      <Link to="counter">Start the Counter now ⏳ </Link>
    </div>
  );
}
