export default function ProjectCard(props: any) {
	return (
		<div>
			<h1>{props.title}</h1>
			<a href={props.link}>{props.linkText}</a>
			<p>{props.description}</p>
		</div>
	);
}
