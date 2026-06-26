"use client";

import { Mail } from "lucide-react";

export default function Contact() {
	const handleContact = () => {
		const email = "investment@alfredoramos.pro";
		const subject = "Interés en la vivienda";
		const body = `Hola,

Estoy interesado en la vivienda y me gustaría recibir más información.`;

		const gmailUrl =
			`https://mail.google.com/mail/?view=cm&fs=1` +
			`&to=${encodeURIComponent(email)}` +
			`&su=${encodeURIComponent(subject)}` +
			`&body=${encodeURIComponent(body)}`;

		window.open(gmailUrl, "_blank");
	};
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="contact-card">
					<div className="contact-icon">
						<Mail size={42} />
					</div>

					<span className="contact-tag">
						Contacto
					</span>

					<h2>¿Te interesa esta vivienda?</h2>

					<p className="contact-description">
						Si quieres conocer más detalles, resolver cualquier duda o
						concertar una visita, estaré encantado de ayudarte.
					</p>

					<button
						type="button"
						className="contact-button"
						onClick={handleContact}
					>
						<Mail size={22} />
						Contactar por correo
					</button>

					<p className="contact-small">
						Responderé personalmente a tu correo lo antes posible.
					</p>
				</div>
			</div>
		</section>
	);
}