import { Property } from "@/types/property";

export const property: Property = {
	title: "Apartamento moderno con terraza",
	city: "Cádiz",
	address: "Centro histórico",

	price: 950,

	bedrooms: 3,

	bathrooms: 2,

	size: 110,

	floor: "3ª Planta",

	available: true,

	description:
		"Luminoso apartamento completamente reformado, situado en una de las mejores zonas de Cádiz. Dispone de una amplia terraza, cocina equipada y excelente conexión con transporte público.",

	features: [
		"WiFi de alta velocidad",
		"Aire acondicionado",
		"Ascensor",
		"Garaje privado",
		"Terraza",
		"Cocina totalmente equipada",
		"Fibra óptica",
		"Lavadora",
	],

	images: [
		"/images/hero.jpg",
		"/images/living-room.jpg",
		"/images/kitchen.jpg",
		"/images/bedroom.jpg",
		"/images/bathroom.jpg",
		"/images/terrace.jpg",
	],
};