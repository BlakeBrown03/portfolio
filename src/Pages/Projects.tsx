import { useEffect } from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../projects.json";
import anime from "animejs";

export default function Projects() {
	useEffect(() => {
		anime({
			targets: ".project-card",
			translateX: [-200, 0],
			opacity: [0, 1],
			delay: anime.stagger(500),
			easing: "easeOutQuad"
		});
	}, []);
	return (
		<div className="container mx-auto dark:text-white" id="projects">
			<h1 className="text-center font-bold text-4xl my-3">Projects</h1>
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 project-card">
				{projects.map((project, index: number) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}
