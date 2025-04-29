import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyThisCourse from "./components/WhyThisCourse";
import SyllabusPreview from "./components/SyllabusPreview";
import FreeResources from "./components/FreeResources";
import Instructor from "./components/Instructor";
// import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import RoadmapGenerator from "./components/RoadMapGenerator";

function App() {
	return (
		<div className="min-h-screen bg-slate-50 font-sans text-slate-800">
			<Header />
			<main>
				<Hero />
				<WhyThisCourse />
				<SyllabusPreview />
				<RoadmapGenerator />
				<FreeResources />
				<Instructor />
				{
					// No need Testimonials for now
					//<Testimonials />
				}
				<CallToAction />
				<FAQ />
			</main>
			<Footer />
		</div>
	);
}

export default App;
