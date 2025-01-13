import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./Home.css";

export default function Home() {
	const jobTitles = useRef(null);
	const [index, setIndex] = useState(0);
	const generatedImage: string[] = [
		"../portfolio/programmer2.jpg",
		"../portfolio/programmer3.jpg",
		"../portfolio/programmer4.jpg",
		"../portfolio/programmer5.jpg",
		"../portfolio/programmer6.jpg",
		"../portfolio/programmer7.jpg"
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(Math.floor(Math.random() * 6));
		}, 15000);
		return () => clearInterval(interval);
	}, []);

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
			<div className="flex justify-center items-center">
				<img
					src={generatedImage[index]}
					alt="Generated Image"
					className="rounded-full my-10"
				/>
			</div>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-5xl text-blue-500 font-metamorphous">
					Blake Brown
				</h1>
				<div>
					<span className="text-5xl typed-cursor" ref={jobTitles} />
				</div>
			</div>
		</div>
	);
}
