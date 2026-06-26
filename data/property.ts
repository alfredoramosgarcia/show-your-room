import { Property } from "@/types/property";

export const property: Property = {
	title: "Apartamento moderno con terraza",
	city: "Villamartin",
	address: "Cádiz",

	price: 400,

	bedrooms: 3,

	bathrooms: 1,

	size: 103,

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