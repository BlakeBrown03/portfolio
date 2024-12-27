export default function TechnologyCard(props: any) {
	return (
		<div
			className={
				"border-gray-200 border-2 p-3 my-3 rounded-2xl shadow-md bg-gray-200 grid grid-cols-2"
			}>
			<img
				src={props.picture}
				style={{
					width: "auto",
					height: "auto",
					maxWidth: "50px",
					maxHeight: "50px"
				}}
			/>
			<h2 className="text-lg">{props.title}</h2>
		</div>
	);
}
