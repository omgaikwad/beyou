import "./App.css";
import Bookmark from "./frontend/pages/Bookmark/Bookmark";
import Explore from "./frontend/pages/Explore/Explore";
import Home from "./frontend/pages/Home/Home";
import LandingPage from "./frontend/pages/LandingPage/LandingPage";
import Login from "./frontend/pages/Login/Login";
import MyProfile from "./frontend/pages/MyProfile/MyProfile";
import Signup from "./frontend/pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
