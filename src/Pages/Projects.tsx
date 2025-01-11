import ProjectCard from "../Components/ProjectCard";
import projects from "../projects.json";

export default function Projects() {
	return (
		<div className="container mx-auto dark:text-white" id="projects">
			<h1 className="text-center font-bold text-4xl my-3">Projects</h1>
			<div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
				{projects.map((project, index: number) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</div>
	);
}
