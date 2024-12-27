import TechnologyCard from "../Components/TechnologyCard";

export default function Technologies() {
	let technologies = [
		{ picture: "src/logos/React-icon.svg", title: "React" },
		{
			picture: "src/logos/Typescript_logo_2020.svg",
			title: "TypeScript"
		},
		{ picture: "src/logos/Bootstrap_logo.svg", title: "Bootstrap" }
	];

	return (
		<div className="container mx-auto">
			<h1 className="text-center font-bold text-4xl my-3">
				Technologies and Tools
			</h1>
			<div className="grid auto-rows-auto auto-cols-min-1 auto-cols-max-4 gap-x-4 gap-y-4">
				{technologies.map((technology, index) => {
					return <TechnologyCard key={index} {...technology} />;
				})}
			</div>
		</div>
	);
}
