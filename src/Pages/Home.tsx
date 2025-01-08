export default function Home() {
	return (
		<div id="home" className="relative">
			<video autoPlay muted loop className={"w-full aspect-video"}>
				<source src="src/batman.mp4" />
			</video>
			<h1 className="absolute inset-0 flex items-center justify-center z-1 text-white">
				Blake Brown
			</h1>
		</div>
	);
}
