import { useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div
			className="container mx-auto dark:text-white dark:bg-slate-900"
			id="contact">
			<h1 className="text-center font-bold text-4xl my-3 text-blue-500 font-metamorphous">
				Contact
			</h1>
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
					<h1 className="text-center font-bold text-lg">
						Get in touch
					</h1>
					<h2 className="my-1">Name:</h2>
					<input
						type="text"
						onChange={e => setName(e.target.value)}
						className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-700"
					/>
					<h2 className="my-1">Email:</h2>
					<input
						type="email"
						onChange={e => setEmail(e.target.value)}
						className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg"
					/>
					<h2 className="my-1">Message:</h2>
					<textarea
						onChange={e => setMessage(e.target.value)}
						className="w-full p-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-lg"
						rows={5}
					/>
					<div className="flex justify-end">
						<button className="bg-blue-500 text-white p-2 rounded-lg mt-2 ">
							<a
								href={`mailto:blake.m.brown03@gmail.com?subject=Contact%20Form&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`}>
								Submit
							</a>
						</button>
					</div>
				</div>
				<div className="text-center">
					<h1 className="font-bold text-2xl">Email</h1>
					<button className="my-4">
						<a
							href="mailto:blake.m.brown03@gmail.com"
							className="underline">
							blake.m.brown03@gmail.com
						</a>
					</button>
					<h1 className="font-bold text-2xl mb-4">Socials</h1>
					<div className="container grid grid-cols-4 gap-4 justify-items-center">
						<button>
							<img
								src="./github-mark.svg"
								alt="GitHub"
								style={{
									width: "50px",
									height: "50px"
								}}
								onClick={() =>
									window.open(
										"https://github.com/BlakeBrown03"
									)
								}
							/>
						</button>
						<button>
							<img
								src="./LinkedIn.svg"
								alt="LinkedIn"
								style={{
									width: "50px",
									height: "50px"
								}}
								onClick={() =>
									window.open(
										"https://www.linkedin.com/in/blake-brown03"
									)
								}
							/>
						</button>
						<button>
							<img
								src="./leetcode.svg"
								alt="LeetCode"
								style={{
									width: "50px",
									height: "50px"
								}}
								onClick={() =>
									window.open(
										"https://leetcode.com/u/blakeb55/"
									)
								}
							/>
						</button>
						<button>
							<img
								src="./x.svg"
								alt="X"
								style={{ width: "50px", height: "50px" }}
								onClick={() =>
									window.open("https://x.com/BlakeBrown_03")
								}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
