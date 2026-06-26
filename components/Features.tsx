import { property } from "@/data/property";

import {
	Wifi,
	Snowflake,
	Car,
	Trees,
	CookingPot,
	Building2,
	WashingMachine,
	Cable,
} from "lucide-react";

const icons = [
	<Wifi size={34} />,
	<Snowflake size={34} />,
	<Building2 size={34} />,
	<Car size={34} />,
	<Trees size={34} />,
	<CookingPot size={34} />,
	<Cable size={34} />,
	<WashingMachine size={34} />,
];

export default function Features() {
	return (
		<section
			id="features"
			className="bg-[#173b63] py-32"
		>
			<div className="container">

				<div className="text-center mb-20">

					<span className="text-[#d99a34] font-bold uppercase tracking-widest">

						Características

					</span>

					<h2 className="text-white mt-4">

						Todo lo que necesitas para sentirte como en casa

					</h2>

					<p className="text-slate-300 mt-6 max-w-3xl mx-auto">

						Un apartamento pensado para ofrecer comodidad,
						funcionalidad y una experiencia única desde el
						primer día.

					</p>

				</div>

				<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

					{property.features.map((feature, index) => (

						<div
							key={feature}
							className="
                group
                bg-white
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-4
                hover:shadow-2xl
              "
						>

							<div
								className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-[#d99a34]/15
                  flex
                  items-center
                  justify-center
                  text-[#d99a34]
                  mb-6
                  transition-all
                  duration-300
                  group-hover:bg-[#d99a34]
                  group-hover:text-white
                "
							>

								{icons[index]}

							</div>

							<h3 className="text-[#173b63] text-xl">

								{feature}

							</h3>

						</div>

					))}

				</div>

			</div>
		</section>
	);
}