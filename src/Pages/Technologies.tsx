import { useEffect } from "react";
import TechnologyCard from "../Components/TechnologyCard";
import technologies from "../technologies.json";
import anime from "animejs/lib/anime.es.js";

export default function Technologies() {
	useEffect(() => {
		anime({
			targets: ".technology-card",
			translateX: [200, 0],
			opacity: [0, 1],
			delay: anime.stagger(500),
			easing: "easeOutQuad"
		});
	}, []);

	return (
		<div
			className="container mx-auto dark:text-white relative"
			id="technologies">
			<h1 className="text-center font-bold text-4xl my-3 text-blue-500 font-metamorphous">
				Technologies and Tools
			</h1>
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 technology-card">
				{technologies.map((technology, index) => {
					return <TechnologyCard key={index} {...technology} />;
				})}
			</div>
		</div>
	);
}
