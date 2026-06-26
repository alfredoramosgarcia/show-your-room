import Image from "next/image";

import {
	MapPin,
	Navigation,
	Bus,
	ShoppingBag,
	GraduationCap,
	Waves,
} from "lucide-react";

export default function Location() {
	return (
		<section
			id="location"
			className="bg-[#f8fafc]"
		>
			<div className="container">

				<div className="text-center mb-20">

					<span className="text-[#d99a34] uppercase font-bold tracking-widest">

						Ubicación

					</span>

					<h2 className="mt-4">

						Una ubicación privilegiada

					</h2>

					<p className="section-subtitle">

						Vive cerca de todo lo importante.
						Transporte, ocio, supermercados y playa
						a pocos minutos caminando.

					</p>

				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center">

					{/* Imagen */}

					<div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">

						<Image
							src="/images/location.jpg"
							alt="Ubicación"
							fill
							className="object-cover transition duration-700 group-hover:scale-105"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

					</div>

					{/* Información */}

					<div>

						<div
							className="
              bg-white
              rounded-3xl
              shadow-xl
              p-10
            "
						>

							<div className="flex items-center gap-4 mb-8">

								<MapPin
									size={40}
									className="text-[#d99a34]"
								/>

								<div>

									<h3>

										Centro Histórico

									</h3>

									<p>

										Cádiz, Andalucía

									</p>

								</div>

							</div>

							<div className="space-y-7">

								<div className="flex items-center gap-4">

									<Waves className="text-[#d99a34]" />

									<span>

										Playa · 8 minutos

									</span>

								</div>

								<div className="flex items-center gap-4">

									<ShoppingBag className="text-[#d99a34]" />

									<span>

										Supermercado · 3 minutos

									</span>

								</div>

								<div className="flex items-center gap-4">

									<Bus className="text-[#d99a34]" />

									<span>

										Autobús · 2 minutos

									</span>

								</div>

								<div className="flex items-center gap-4">

									<GraduationCap className="text-[#d99a34]" />

									<span>

										Universidad · 10 minutos

									</span>

								</div>

							</div>

							<a
								href="https://maps.google.com"
								target="_blank"
								className="
                btn
                btn-primary
                mt-10
                inline-flex
                items-center
                gap-3
                "
							>

								<Navigation size={20} />

								Abrir en Google Maps

							</a>

						</div>

					</div>

				</div>

			</div>

		</section>
	);
}