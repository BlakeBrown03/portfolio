export default function Home() {
	return (
		<div id="home" className="relative h-screen">
			<video autoPlay muted loop className={"w-full h-full object-cover"}>
				<source src="src/batman.mp4" />
			</video>
			<h1 className="absolute inset-0 flex items-center justify-center z-10 text-white text-7xl mix-blend-overlay">
				Blake Brown
			</h1>
		</div>
	);
}
