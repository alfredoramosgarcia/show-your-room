import { property } from "@/data/property";

import {
	BedDouble,
	Bath,
	Ruler,
	Euro,
} from "lucide-react";

export default function PropertyInfo() {
	return (
		<section
			className="relative z-20 -mt-28"
		>
			<div className="container">

				<div
					className="
          bg-white
          rounded-3xl
          shadow-2xl
          p-10
          grid
          md:grid-cols-4
          gap-8
        "
				>

					{/* Precio */}

					<div className="text-center">

						<Euro
							className="mx-auto text-[#d99a34]"
							size={36}
						/>

						<h3 className="mt-4 text-3xl font-bold">

							{property.price}€

						</h3>

						<p>Precio mensual</p>

					</div>

					{/* Habitaciones */}

					<div className="text-center">

						<BedDouble
							className="mx-auto text-[#d99a34]"
							size={36}
						/>

						<h3 className="mt-4 text-3xl font-bold">

							{property.bedrooms}

						</h3>

						<p>Habitaciones</p>

					</div>

					{/* Baños */}

					<div className="text-center">

						<Bath
							className="mx-auto text-[#d99a34]"
							size={36}
						/>

						<h3 className="mt-4 text-3xl font-bold">

							{property.bathrooms}

						</h3>

						<p>Baños</p>

					</div>

					{/* Tamaño */}

					<div className="text-center">

						<Ruler
							className="mx-auto text-[#d99a34]"
							size={36}
						/>

						<h3 className="mt-4 text-3xl font-bold">

							{property.size}

						</h3>

						<p>Metros cuadrados</p>

					</div>

				</div>

			</div>

		</section>
	);
}