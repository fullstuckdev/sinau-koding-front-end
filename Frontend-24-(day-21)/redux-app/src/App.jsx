import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import LocalStateApp from "./local/AppLocal";
import ReduxApp from "./redux/AppRedux";
import { useState } from "react";

function App() {
  const [useRedux, setUseRedux] = useState(false);
  return (
    <div className="container">
      <h1>React Todo App Comparison</h1>
      <button onClick={() => setUseRedux(!useRedux)}>
        Switch to {useRedux ? "Local State" : "Redux"} Version
      </button>
      {useRedux ? (
        <Provider store={store}>
          <ReduxApp />
        </Provider>
      ) : (
        <LocalStateApp />
      )}{" "}
    </div>
  );
}

export default App;
