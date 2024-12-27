import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
	return (
		<>
			<nav className="bg-gray-200 border-gray-200">
				<div className="container mx-auto p-4 flex">
					<div className="flex">
						<h1 className="">Blake Brown</h1>
					</div>
					<div className="flex justify-end flex-grow items-center">
						<ul className="flex flex-col md:flex-row space-x-2">
							<li>
								<a href="#about-me">About Me</a>
							</li>
							<li>
								<a href="#technologies">Technologies</a>
							</li>
							<li>
								<a href="#projects">Projects</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<AboutMe />
			<Technologies />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
