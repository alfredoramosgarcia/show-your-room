import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyInfo from "@/components/PropertyInfo";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Description from "@/components/Description";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />

			<Hero />

			<PropertyInfo />

			<Features />

			<Gallery />

			<Description />

			<Location />

			<Contact />

			<Footer />
		</>
	);
}