import { property } from "@/data/property";

import {
	CircleCheck,
	BadgeCheck,
	ArrowRight,
} from "lucide-react";

export default function Description() {
	return (
		<section className="bg-white">

			<div className="container">

				<div className="grid lg:grid-cols-2 gap-20 items-center">

					{/* Columna izquierda */}

					<div>

						<span className="text-[#d99a34] uppercase font-bold tracking-widest">

							Descripción

						</span>

						<h2 className="mt-5 mb-8">

							Descubre tu próximo hogar

						</h2>

						<p className="text-lg leading-9 mb-10">

							{property.description}

						</p>

						<a
							href="#contact"
							className="btn btn-primary inline-flex items-center gap-3"
						>
							Contactar

							<ArrowRight size={20} />

						</a>

					</div>

					{/* Columna derecha */}

					<div>

						<div className="space-y-6">

							<div className="flex gap-5">

								<CircleCheck
									size={30}
									className="text-[#d99a34]"
								/>

								<div>

									<h3>

										Espacios luminosos

									</h3>

									<p>

										Grandes ventanales que permiten
										aprovechar la luz natural durante
										todo el día.

									</p>

								</div>

							</div>

							<div className="flex gap-5">

								<CircleCheck
									size={30}
									className="text-[#d99a34]"
								/>

								<div>

									<h3>

										Reformado recientemente

									</h3>

									<p>

										Materiales modernos y acabados de alta calidad.

									</p>

								</div>

							</div>

							<div className="flex gap-5">

								<CircleCheck
									size={30}
									className="text-[#d99a34]"
								/>

								<div>

									<h3>

										Excelente ubicación

									</h3>

									<p>

										A pocos minutos del centro,
										transporte público y supermercados.

									</p>

								</div>

							</div>

							<div className="flex gap-5">

								<CircleCheck
									size={30}
									className="text-[#d99a34]"
								/>

								<div>

									<h3>

										Lista para entrar a vivir

									</h3>

									<p>

										Totalmente equipada y preparada
										para nuevos inquilinos.

									</p>

								</div>

							</div>

						</div>

						{/* Tarjeta */}

						<div
							className="
              mt-14
              rounded-3xl
              bg-[#173b63]
              p-8
              text-white
              shadow-2xl
            "
						>

							<div className="flex items-center gap-4">

								<BadgeCheck
									size={42}
									className="text-[#d99a34]"
								/>

								<div>

									<h3>

										Disponible inmediatamente

									</h3>

									<p className="text-slate-300">

										Puedes concertar una visita
										cuando quieras.

									</p>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

		</section>
	);
}