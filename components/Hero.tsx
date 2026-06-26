import Image from "next/image";
import { property } from "@/data/property";
import {
	MapPin,
	BedDouble,
	Bath,
	Ruler,
	ArrowRight,
	CircleCheck,
} from "lucide-react";

export default function Hero() {
	return (
		<section className="hero">

			<div className="heroBackground">
				<Image
					src={property.images[0]}
					alt={property.title}
					fill
					priority
				/>
			</div>

			<div className="heroOverlay"></div>

			<div className="heroContainer">

				<div className="heroContent">

					<div className="heroBadge">
						<CircleCheck size={18} />
						Disponible ahora
					</div>

					<h1 className="heroTitle">
						{property.title}
					</h1>

					<div className="heroLocation">
						<MapPin size={18} />
						<span>
							{property.city} · {property.address}
						</span>
					</div>

					<p className="heroDescription">
						{property.description}
					</p>

					<div className="heroButtons">

						<a
							href="#gallery"
							className="heroButtonSecondary"
						>
							Ver galería
							<ArrowRight size={20} />
						</a>

						<a
							href="#contact"
							className="heroButtonSecondary"
						>
							Contactar
						</a>

					</div>

				</div>

				<div className="heroCard">

					<div className="heroFloating">
						Disponible
					</div>

					<p>Desde</p>

					<h2 className="heroPrice">

						{property.price}€

						<span>/mes</span>

					</h2>

					<div className="heroCardDivider"></div>

					<div className="heroStats">

						<div className="heroStat">

							<div className="heroStatIcon">
								<BedDouble size={26} />
							</div>

							<div className="heroStatContent">
								<h4>{property.bedrooms}</h4>
								<p>Habitaciones</p>
							</div>

						</div>

						<div className="heroStat">

							<div className="heroStatIcon">
								<Bath size={26} />
							</div>

							<div className="heroStatContent">
								<h4>{property.bathrooms}</h4>
								<p>Baños</p>
							</div>

						</div>

						<div className="heroStat">

							<div className="heroStatIcon">
								<Ruler size={26} />
							</div>

							<div className="heroStatContent">
								<h4>{property.size}</h4>
								<p>m²</p>
							</div>

						</div>

					</div>

				</div>

			</div>

		</section>
	);
}