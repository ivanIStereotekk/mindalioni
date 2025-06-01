import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import AnimatedLogo from "./components/animatelogo";

// const navigation = [
// 	{ name: "Project", href: "/projects" },
// 	{ name: "Contacts", href: "/contact" },
// 	{name: "Articles", href: "/blog" },
// 	{name: "AI Conversation", href: "/conversation"},
// ];






export default function Home() {
	return <>
			<div className=" justify-center hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
					<Particles
						className="absolute inset-0 -z-10 animate-fade-in"
						quantity={400}
					/>
				<AnimatedLogo/>
				<h1>მინდალიონი</h1>

			<div>
			<h2 className="text-sm text-zinc-500 ">
					Where{" "}
					<Link
						target="_blank"
						href="https://ivanistereotekk.github.io/"
						className="underline duration-500 hover:text-zinc-300"
					>
						vision
					</Link>{" "}
					becomes tomorrow's reality.
				</h2>
			</div>
</>
}
