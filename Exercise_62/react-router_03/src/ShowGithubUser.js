import { Link, useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubUser() {
  const { username } = useParams();
  return (
    <div>
      <h4>Insert your name (or nickname) instead of "/undefined" into the path 🔝 and press enter. 
        <br />
        See what happens next.. ⤵️ 😏</h4>
      <GitHubUser username={username} />
      <br />
      <Link to={`/`}> Go back to Homepage</Link>
    </div>
  );
}
