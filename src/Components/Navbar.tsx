import { useState } from "react";

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(false);

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
		<nav className="bg-gray-200 border-gray-200 dark:bg-gray-800 sticky top-0">
			<div className="container mx-auto p-4 flex dark:text-white">
				<div className="flex-grow">
					<a href="#home" onClick={e => handleAnchorClick(e, "home")}>
						<h1>Blake Brown</h1>
					</a>
				</div>
				<div className="flex justify-end">
					<ul className="flex justify-end space-x-2 ">
						<li>
							<a
								href="#about-me"
								onClick={e => handleAnchorClick(e, "about-me")}>
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
								onClick={e => handleAnchorClick(e, "projects")}>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contact"
								onClick={e => handleAnchorClick(e, "contact")}>
								Contact
							</a>
						</li>
						<li>
							<input
								type="checkbox"
								name="light-switch"
								checked={darkMode}
								onChange={() => {
									setDarkMode(!darkMode);
									document.body.classList.toggle("dark");
								}}
								className=""></input>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
