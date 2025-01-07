export default function Home() {
	return (
		<div id="home">
			<video autoPlay muted loop className={"w-full aspect-video"}>
				<source src="src/batman.mp4" />
			</video>
		</div>
	);
}
