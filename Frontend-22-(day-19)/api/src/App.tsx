import "./App.css";
import { AxiosFunc } from "./components/Axios";
import { PostsFetch } from "./components/Fetch";

function App() {
  return (
    <div style={{ display: "flex", gap: "50px" }}>
      <PostsFetch />
      <AxiosFunc/>
    </div>
  );
}

export default App;
