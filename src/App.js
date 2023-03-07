import "./App.css";
import "bulma/css/bulma.min.css";
import AboutMe from "./Screens/NavBar";
import NavBar from "./Screens/AboutMe";
import Profile from "./Screens/Profile";
import Work from "./Screens/Work";
import Footer from "./Screens/Footer";

function App() {
  return (
    <>
      <AboutMe />
      <NavBar />
      <Profile />
      <Work />
      <Footer />
    </>
  );
}

export default App;
