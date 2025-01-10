import TechnologyCard from "../Components/TechnologyCard";
import technologies from "../technologies.json";

export default function Technologies() {
	return (
		<div className="container mx-auto dark: text-white" id="technologies">
			<h1 className="text-center font-bold text-4xl my-3">
				Technologies and Tools
			</h1>
			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{technologies.map((technology, index) => {
					return <TechnologyCard key={index} {...technology} />;
				})}
			</div>
		</div>
	);
}
