"use client";

import { ArrowUp, House } from "lucide-react";

export default function Footer() {
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="footer">

			<div className="container">

				<div className="footer-content">

					<div className="footer-logo">

						<House size={34} />

						<h2>

							Show<span>Your</span>Room

						</h2>

					</div>

					<p className="footer-description">

						Descubre viviendas únicas y encuentra
						el lugar perfecto para comenzar tu
						próxima etapa.

					</p>

					<nav className="footer-nav">

						<a href="#">Inicio</a>

						<a href="#features">
							Características
						</a>

						<a href="#gallery">
							Galería
						</a>

						<a href="#location">
							Ubicación
						</a>

						<a href="#contact">
							Contacto
						</a>

					</nav>

				</div>

				<div className="footer-bottom">

					<p>

						© 2026 ShowYourRoom · Todos los derechos reservados.

					</p>

					<button
						onClick={scrollTop}
						className="scroll-top"
					>

						<ArrowUp size={22} />

					</button>

				</div>

			</div>

		</footer>
	);
}