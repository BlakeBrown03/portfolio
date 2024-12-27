import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
	const handleAnchorClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const headerOffset = 60;
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - headerOffset,
				behavior: "smooth"
			});
		}
	};

	return (
		<>
			<nav className="bg-gray-200 border-gray-200 sticky top-0">
				<div className="container mx-auto p-4 flex">
					<div className="flex">
						<h1 className="">Blake Brown</h1>
					</div>
					<div className="flex justify-end flex-grow items-center">
						<ul className="flex flex-col md:flex-row space-x-2">
							<li>
								<a
									href="#about-me"
									onClick={e =>
										handleAnchorClick(e, "about-me")
									}>
									About Me
								</a>
							</li>
							<li>
								<a
									href="#technologies"
									onClick={e =>
										handleAnchorClick(e, "technologies")
									}>
									Technologies
								</a>
							</li>
							<li>
								<a
									href="#projects"
									onClick={e =>
										handleAnchorClick(e, "projects")
									}>
									Projects
								</a>
							</li>
							<li>
								<a
									href="#contact"
									onClick={e =>
										handleAnchorClick(e, "contact")
									}>
									Contact
								</a>
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
