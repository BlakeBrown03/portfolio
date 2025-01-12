export default function ProjectCard(props: any) {
	return (
		<div className="container mx-auto col-span-1 border-gray-200 border-2 p-3 my-3 rounded-2xl shadow-md bg-gray-200 text-center dark:bg-gray-800 dark:border-gray-800">
			<h1>{props.title}</h1>
			<div className={"my-2 relative group"}>
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
				<p className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-200 flex items-center text-black bg-opacity-80">
					{props.description}
				</p>
			</div>
			<button className="dark:bg-slate-400 dark:border-slate-400 rounded-md px-2 py-2 my-2">
				<a href={props.link}>{props.linkText}</a>
			</button>
		</div>
	);
}
