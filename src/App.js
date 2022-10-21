import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import Bookmark from "./pages/Bookmark/Bookmark";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import MyProfile from "./pages/MyProfile/MyProfile";
import Signup from "./pages/Signup/Signup";
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
