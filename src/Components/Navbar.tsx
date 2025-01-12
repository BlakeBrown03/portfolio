import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") === null
			? window.matchMedia("(prefers-color-scheme: dark)").matches
			: JSON.parse(localStorage.getItem("darkMode")!)
	);

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

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "true");
		} else {
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "false");
		}
	}, []);

	return (
		<nav className="bg-gray-200 border-gray-200 dark:bg-gray-800 sticky top-0 z-50">
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
							<IoMoon />
						</li>
						<li>
							<input
								type="range"
								min="0"
								max="1"
								step="1"
								value={darkMode ? 0 : 1}
								onChange={() => {
									if (darkMode) {
										setDarkMode(false);
										document.body.classList.remove("dark");
										localStorage.setItem(
											"darkMode",
											"false"
										);
									} else {
										setDarkMode(true);
										document.body.classList.add("dark");
										localStorage.setItem(
											"darkMode",
											"true"
										);
									}
								}}
								className="w-11 h-5 rounded-full "
							/>
						</li>
						<li>{<IoSunny />}</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
