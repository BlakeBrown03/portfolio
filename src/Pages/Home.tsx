import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "./Home.css";
import { usePollinationsImage } from "@pollinations/react";

export default function Home() {
	const jobTitles = useRef(null);
	const [seed, setSeed] = useState(Math.floor(Math.random() * 10000 + 1));
	const generatedImage = usePollinationsImage(
		"blonde, male programmer with sunglasses on sitting in his apartment coding with beautiful Chicago skyline in the background",
		{
			width: 500,
			height: 500,
			seed: seed,
			model: "flux",
			nologo: true
		}
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeed(Math.floor(Math.random() * 10000));
		}, 20000);

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
			{generatedImage ? (
				<img
					src={generatedImage}
					alt="Generated Image"
					className="rounded-full my-10"
				/>
			) : (
				<p>Loading...</p>
			)}
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
