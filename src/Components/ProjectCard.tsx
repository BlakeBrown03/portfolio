export default function ProjectCard(props: any) {
	return (
		<div className="container mx-auto col-span-1 border-gray-200 border-2 p-3 my-3 rounded-2xl shadow-md bg-gray-200 text-center">
			<h1>{props.title}</h1>
			<a href={props.link}>{props.linkText}</a>
			<p>{props.description}</p>
		</div>
	);
}
