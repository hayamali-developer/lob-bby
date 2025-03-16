import HeroSection from "@/components/HeroSection";
import MainHomePage from "@/components/MainHomePage";
// ... existing code ...
import "./globals.css"; // Ensure this line is added
// ... existing code ...

export default function Home() {
	return (
		<div>
			<HeroSection />
			<MainHomePage />
		</div>
	);
}
