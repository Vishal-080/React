import "./styles.css";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import { Second } from "./components/second";

function App() {
  const { token, handleTokenChange } = useContext(AuthContext);

  if (!token) {
    return (
      <div className="App">
        <h4>User Not Logged In | Please Login First</h4>
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
        <button
          onClick={() => {
            handleTokenChange("QpwL5tke4Pnpja7X4");
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Second />
    </div>
  );
}
export default App;
