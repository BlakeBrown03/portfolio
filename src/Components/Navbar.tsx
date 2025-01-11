import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode") || "false")
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

	const handleDarkModeToggle = (darkMode: boolean) => {
		setDarkMode(!darkMode);
		if (darkMode) {
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "true");
		} else {
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "false");
		}
	};

	useEffect(() => {
		console.log("darkMode", darkMode);
		if (localStorage.getItem("darkMode") === null) {
			localStorage.setItem(
				"darkMode",
				window.matchMedia("(prefers-color-scheme: dark)").matches
					? "true"
					: "false"
			);
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.body.classList.add("dark");
			}
		}
	}, []);

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
						<li>{darkMode ? <IoMoon /> : <></>}</li>
						<li>
							<input
								type="range"
								min="0"
								max="1"
								step="1"
								value={darkMode ? 1 : 0}
								onChange={() => handleDarkModeToggle(darkMode)}
								className="w-10 h-5 rounded-full "
							/>
						</li>
						<li>{!darkMode ? <IoSunny /> : <></>}</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
