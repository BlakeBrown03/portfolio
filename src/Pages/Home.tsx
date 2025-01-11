import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";

export default function Home() {
	const jobTitles = useRef(null);

	useEffect(() => {
		const typed = new Typed(jobTitles.current, {
			strings: ["Software Engineer", "Web Developer"],
			typeSpeed: 50,
			backSpeed: 100,
			backDelay: 4000,
			autoInsertCss: true,
			loop: true
		});
		return () => typed.destroy();
	}, []);

	return (
		<div
			id="home"
			className="container mx-auto grid grid-cols-1 md:grid-cols-2 dark:text-white">
			<img
				src="src/project-photos/picture-of-me.jpg"
				alt="Picture of me"
				className="rounded-full my-10"
			/>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-5xl">Blake Brown</h1>
				<div>
					<span className="text-5xl typed-cursor" ref={jobTitles} />
				</div>
			</div>
		</div>
	);
}
