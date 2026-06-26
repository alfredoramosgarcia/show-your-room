"use client";

import { useEffect, useState } from "react";
import { House, Menu, X } from "lucide-react";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 40);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const links = [
		{
			name: "Características",
			href: "#features",
		},
		{
			name: "Galería",
			href: "#gallery",
		},
		{
			name: "Ubicación",
			href: "#location",
		},
		{
			name: "Contacto",
			href: "#contact",
		},
	];

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
					? "py-3"
					: "py-6"
				}`}
		>
			<nav
				className={`max-w-7xl mx-auto flex items-center justify-between px-8 rounded-full transition-all duration-300 ${scrolled
						? "bg-white/80 backdrop-blur-xl shadow-xl"
						: "bg-transparent"
					}`}
			>
				<a
					href="#"
					className="flex items-center gap-3 py-4"
				>
					<House
						size={34}
						className="text-[#d99a34]"
					/>

					<span className="font-black text-2xl text-[#173b63]">
						Show<span className="text-[#d99a34]">Your</span>Room
					</span>
				</a>

				<ul className="hidden md:flex items-center gap-10">
					{links.map((link) => (
						<li key={link.name}>
							<a
								href={link.href}
								className="font-semibold text-slate-700 hover:text-[#d99a34] transition-colors"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>

				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="md:hidden"
				>
					{menuOpen ? <X /> : <Menu />}
				</button>
			</nav>

			{menuOpen && (
				<div className="md:hidden mt-4 mx-6 rounded-3xl bg-white shadow-xl">
					<ul className="flex flex-col py-6">
						{links.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									onClick={() => setMenuOpen(false)}
									className="block px-8 py-4 hover:bg-slate-100"
								>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}