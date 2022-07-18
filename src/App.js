import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
    </div>
  );
}

export default App;
