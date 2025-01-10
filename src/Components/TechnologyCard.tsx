export default function TechnologyCard(props: any) {
	return (
		<div
			className={
				"container mx-auto col-span-1 border-gray-200 border-2 p-3 my-3 rounded-2xl shadow-md bg-gray-200 flex items-center dark: bg-gray-800 border-gray-800"
			}>
			<img
				src={props.picture}
				style={{
					width: "auto",
					height: "auto",
					maxWidth: "60px",
					maxHeight: "60px"
				}}
			/>
			<h2 className="text-lg ml-3">{props.title}</h2>
		</div>
	);
}
