import Image from "next/image";
import { property } from "@/data/property";
import { Images } from "lucide-react";

export default function Gallery() {
	return (
		<section
			id="gallery"
			className="bg-[#f8fafc]"
		>
			<div className="container">

				{/* Cabecera */}

				<div className="text-center mb-16">

					<span className="text-[#d99a34] font-bold uppercase tracking-widest">
						Galería
					</span>

					<h2 className="mt-4">
						Descubre cada rincón
					</h2>

					<p className="section-subtitle">
						Espacios luminosos, diseño moderno y cada detalle pensado
						para ofrecer una experiencia acogedora.
					</p>

				</div>

				{/* Grid */}

				<div className="grid grid-cols-4 grid-rows-2 gap-5 h-[650px]">

					{/* Imagen principal */}

					<div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">

						<Image
							src={property.images[0]}
							alt="Hero"
							fill
							className="object-cover transition duration-700 group-hover:scale-110"
						/>

					</div>

					{/* Imagen */}

					{property.images.slice(1).map((image, index) => (

						<div
							key={index}
							className="relative rounded-3xl overflow-hidden group"
						>

							<Image
								src={image}
								alt={`Imagen ${index}`}
								fill
								className="object-cover transition duration-700 group-hover:scale-110"
							/>

						</div>

					))}

				</div>

				{/* Botón */}

				<div className="flex justify-center mt-14">

					<button
						className="
              btn
              btn-primary
              flex
              items-center
              gap-3
            "
					>

						<Images size={22} />

						Ver todas las fotografías

					</button>

				</div>

			</div>
		</section>
	);
}