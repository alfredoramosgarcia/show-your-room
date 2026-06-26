import Image from "next/image";
import { property } from "@/data/property";
import {
	MapPin,
	BedDouble,
	Bath,
	Ruler,
	ArrowRight,
} from "lucide-react";

export default function Hero() {
	return (
		<section className="relative h-screen flex items-center">

			{/* Imagen */}

			<Image
				src={property.images[0]}
				alt={property.title}
				fill
				priority
				className="object-cover"
			/>

			{/* Overlay */}

			<div className="absolute inset-0 bg-gradient-to-r from-[#173b63]/90 via-[#173b63]/60 to-black/40" />

			{/* Contenido */}

			<div className="relative z-10 container">

				<div className="max-w-3xl">

					<span className="inline-block bg-[#d99a34] text-white px-5 py-2 rounded-full font-semibold mb-6">

						Disponible ahora

					</span>

					<h1 className="text-white leading-tight mb-6">

						{property.title}

					</h1>

					<div className="flex items-center gap-2 text-white mb-8">

						<MapPin size={20} />

						<span>

							{property.city} · {property.address}

						</span>

					</div>

					<p className="text-white/90 text-lg max-w-2xl mb-10">

						{property.description}

					</p>

					{/* Tarjetas */}

					<div className="grid grid-cols-3 gap-5 mb-10">

						<div className="bg-white/15 backdrop-blur-md rounded-2xl p-5">

							<BedDouble className="text-[#d99a34] mb-3" />

							<p className="text-white">

								{property.bedrooms} Habitaciones

							</p>

						</div>

						<div className="bg-white/15 backdrop-blur-md rounded-2xl p-5">

							<Bath className="text-[#d99a34] mb-3" />

							<p className="text-white">

								{property.bathrooms} Baños

							</p>

						</div>

						<div className="bg-white/15 backdrop-blur-md rounded-2xl p-5">

							<Ruler className="text-[#d99a34] mb-3" />

							<p className="text-white">

								{property.size} m²

							</p>

						</div>

					</div>

					{/* Precio */}

					<div className="flex flex-wrap items-center gap-8">

						<div>

							<p className="text-white/70">

								Desde

							</p>

							<h2 className="text-[#d99a34]">

								{property.price}€

								<span className="text-white text-xl">

									/mes

								</span>

							</h2>

						</div>

						<a
							href="#gallery"
							className="btn btn-primary flex items-center gap-3"
						>
							Ver galería

							<ArrowRight size={20} />

						</a>

						<a
							href="#contact"
							className="btn btn-secondary"
						>
							Contactar
						</a>

					</div>

				</div>

			</div>

		</section>
	);
}