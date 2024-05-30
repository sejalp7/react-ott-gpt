import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Body />
      </div>
    </AuthProvider>
  );
}

export default App;
