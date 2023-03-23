import About from "./components/About";
import Codee from "./components/Code";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Video from "./components/Video";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-green-600">

<NavBar/>

<Home/>
<About/>
<SocialLinks/>
<Portfolio/>
<Experience/>
<Contact/>
<Video/>
<Codee/>

    </div>
  );
}

export default App;
