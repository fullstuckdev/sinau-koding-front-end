import { useLocation } from "react-router";

export default function About() {
  const location = useLocation();
  return (
    <div>
      <h1>About Page</h1>
      <p>kamu berada di path: {location.pathname}</p>
    </div>
  );
}
