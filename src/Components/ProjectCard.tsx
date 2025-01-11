export default function ProjectCard(props: any) {
	return (
		<div className="container mx-auto col-span-1 border-gray-200 border-2 p-3 my-3 rounded-2xl shadow-md bg-gray-200 text-center dark:bg-gray-800 dark:border-gray-800">
			<h1>{props.title}</h1>
			<img
				src={props.image}
				alt={props.title}
				style={{
					width: "auto",
					height: "auto",
					maxHeight: "250px"
				}}
				className="mx-auto"
			/>
			<a href={props.link}>{props.linkText}</a>
			<p>{props.description}</p>
		</div>
	);
}
