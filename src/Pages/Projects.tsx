import TechnologyCard from "../Components/TechnologyCard";
import projects from "../projects.json";

export default function Projects() {
	return (
		<div className="container mx-auto">
			<h1 className="text-center font-bold text-4xl my-3">Projects</h1>
			{projects.map((project, index: number) => (
				<TechnologyCard key={index} {...project} />
			))}
		</div>
	);
}
