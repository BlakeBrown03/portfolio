import "./App.css";
import Navbar from "./Components/Navbar";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<AboutMe />
			<Technologies />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
