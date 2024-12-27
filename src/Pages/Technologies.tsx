import TechnologyCard from "../Components/TechnologyCard";
import technologies from "../technologies.json";

export default function Technologies() {
	return (
		<div className="container mx-auto">
			<h1 className="text-center font-bold text-4xl my-3">
				Technologies and Tools
			</h1>
			<div className="grid-flow-col-dense gap-x-4 gap-y-4">
				{technologies.map((technology, index) => {
					return <TechnologyCard key={index} {...technology} />;
				})}
			</div>
		</div>
	);
}
