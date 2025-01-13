import { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Navbar() {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("darkMode") === null
			? window.matchMedia("(prefers-color-scheme: dark)").matches
			: JSON.parse(localStorage.getItem("darkMode")!)
	);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});

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

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const element = document.getElementById(e.target.value);
		if (element) {
			const headerOffset = 90;
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
		<nav className="bg-white dark:bg-gray-900 sticky top-0 z-50">
			<div className="container mx-auto p-4 flex dark:text-white group">
				<div className="flex justify-start mr-auto">
					<a href="#home" onClick={e => handleAnchorClick(e, "home")}>
						<h1 className="hover:text-blue-500 font-metamorphous text-2xl">
							Blake Brown
						</h1>
					</a>
				</div>
				{windowWidth < 768 ? (
					<select
						className="ml-auto py-0 dark:bg-gray-900 dark:border-gray-900 border-white"
						onChange={e => handleSelectChange(e)}>
						<option value="about-me">About Me</option>
						<option value="technologies">Technologies</option>
						<option value="projects">Projects</option>
						<option value="contact">Contact</option>
						<option value="../portfolio/Final-Resume-For-Website.pdf">
							Resume
						</option>
						<option
							onClick={() => {
								if (darkMode) {
									setDarkMode(false);
									document.body.classList.remove("dark");
									localStorage.setItem("darkMode", "false");
								} else {
									setDarkMode(true);
									document.body.classList.add("dark");
									localStorage.setItem("darkMode", "true");
								}
							}}>
							Dark Mode
						</option>
					</select>
				) : (
					<div className="ml-auto">
						<ul className="flex md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-2">
							<li className="hover:text-blue-500">
								<a
									href="#about-me"
									onClick={e =>
										handleAnchorClick(e, "about-me")
									}>
									About Me
								</a>
							</li>
							<li className="hover:text-blue-500">
								<a
									href="#technologies"
									onClick={e =>
										handleAnchorClick(e, "technologies")
									}>
									Technologies
								</a>
							</li>
							<li className="hover:text-blue-500">
								<a
									href="#projects"
									onClick={e =>
										handleAnchorClick(e, "projects")
									}>
									Projects
								</a>
							</li>
							<li className="hover:text-blue-500">
								<a
									href="#contact"
									onClick={e =>
										handleAnchorClick(e, "contact")
									}>
									Contact
								</a>
							</li>
							<li className="hover:text-blue-500">
								<a
									href="../portfolio/Final-Resume-For-Website.pdf"
									download="Blake Brown Resume">
									Resume
								</a>
							</li>
							<li className="hover:text-blue-500 inline-block">
								<div className="flex items-center space-x-2">
									<IoMoon />
									<input
										type="range"
										min="0"
										max="1"
										step="1"
										value={darkMode ? 0 : 1}
										onChange={() => {
											if (darkMode) {
												setDarkMode(false);
												document.body.classList.remove(
													"dark"
												);
												localStorage.setItem(
													"darkMode",
													"false"
												);
											} else {
												setDarkMode(true);
												document.body.classList.add(
													"dark"
												);
												localStorage.setItem(
													"darkMode",
													"true"
												);
											}
										}}
										className="w-11 h-5 rounded-full"
									/>
									<IoSunny />
								</div>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}
