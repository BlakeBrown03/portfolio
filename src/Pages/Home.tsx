export default function Home() {
	return (
		<div
			id="home"
			className="container mx-auto grid grid-cols-1 md:grid-cols-2 dark:text-white">
			<img
				src="src/project-photos/picture-of-me.jpg"
				alt="Picture of me"
				className="rounded-full my-10"
			/>
			<div className="flex justify-center items-center h-full">
				<h1 className="text-5xl">Blake Brown</h1>
			</div>
		</div>
	);
}
