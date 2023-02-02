import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubUser() {
  const { username } = useParams();
  return (
    <div>
      <h4>User details</h4> ⬇
      <GitHubUser username={username} />
      <br />
    </div>
  );
}
