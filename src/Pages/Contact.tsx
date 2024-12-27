import { useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className="container mx-auto">
			<h1 className="text-center font-bold text-4xl my-3">Contact</h1>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="bg-gray-200 p-4 rounded-lg">
					<h2>Get in touch</h2>
					<h2>Name:</h2>
					<input
						type="text"
						onChange={e => setName(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-lg"
					/>
					<h2>Email:</h2>
					<input
						type="email"
						onChange={e => setEmail(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-lg"
					/>
					<h2>Message:</h2>
					<textarea
						onChange={e => setMessage(e.target.value)}
						className="w-full p-2 border border-gray-300 rounded-lg"
						rows={5}
					/>
				</div>
				<div>
					<h2>Email</h2>
					<p>blake.m.brown03@gmail.com</p>
					<h2>Socials</h2>
				</div>
			</div>
		</div>
	);
}
