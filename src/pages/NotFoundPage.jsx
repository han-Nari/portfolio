import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>Page is unavailable</h1>
      <Link to="/">Back To Homepage</Link>
    </>
  );
}
