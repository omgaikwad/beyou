import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Signup />
    </div>
  );
}

export default App;
