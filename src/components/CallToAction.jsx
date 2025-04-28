import React from "react";
import EmailForm from "./ui/EmailForm";
import content from "../data/content.json";

const { hero } = content;

const CallToAction = () => {
	return (
		<section id="call-to-action" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">
					Ready to Master System Design?
				</h2>
				<p className="text-xl mb-8 max-w-2xl mx-auto">
					Join 1,300+ engineers already on the waitlist and get instant access to free
					resources.
				</p>

				<div className="max-w-md mx-auto">
					<EmailForm />
				</div>

				<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
					<div className="flex items-center text-white/80">
						<span className="text-2xl font-bold mr-2 text-white">
							{hero.stats.engineersJoined}
						</span>
						<span>engineers already joined</span>
					</div>
					<div className="bg-white/20 h-6 w-px hidden sm:block"></div>
					<div className="flex items-center text-white/80">
						<span className="text-2xl font-bold mr-2 text-white">Lifetime</span>
						<span>updates included</span>
					</div>
					<div className="bg-white/20 h-6 w-px hidden sm:block"></div>
					<div className="flex items-center text-white/80">
						<span className="text-2xl font-bold mr-2 text-white">
							{hero.stats.bonusCount}
						</span>
						<span>free bonuses</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
