import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Navbar from "./components/Navbar/Navbar";
import Post from "./components/Post/Post";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div
      className="App"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",
      // }}
    >
      {/* <LandingPage /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      <Home />
      {/* <CreatePost /> */}
      {/* <Post /> */}

      {/* <ProfileTab userName={"OmGaikwad_"} name={"Om Gaikwad"} /> */}
    </div>
  );
}

export default App;
