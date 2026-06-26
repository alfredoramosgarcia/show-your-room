import { property } from "@/data/property";
import { BedDouble, Bath, Ruler, Euro } from "lucide-react";

export default function PropertyInfo() {
	return (
		<section className="propertyInfo">

			<div className="container">

				<div className="propertyGrid">

					<div className="propertyCard">

						<div className="propertyIcon">
							<Euro size={34} />
						</div>

						<h3 className="propertyValue">
							{property.price}€
						</h3>

						<p className="propertyLabel">
							Precio / mes
						</p>

					</div>

					<div className="propertyCard">

						<div className="propertyIcon">
							<BedDouble size={34} />
						</div>

						<h3 className="propertyValue">
							{property.bedrooms}
						</h3>

						<p className="propertyLabel">
							Habitaciones
						</p>

					</div>

					<div className="propertyCard">

						<div className="propertyIcon">
							<Bath size={34} />
						</div>

						<h3 className="propertyValue">
							{property.bathrooms}
						</h3>

						<p className="propertyLabel">
							Baños
						</p>

					</div>

					<div className="propertyCard">

						<div className="propertyIcon">
							<Ruler size={34} />
						</div>

						<h3 className="propertyValue">
							{property.size}
						</h3>

						<p className="propertyLabel">
							Metros cuadrados
						</p>

					</div>

				</div>

			</div>

		</section>
	);
}