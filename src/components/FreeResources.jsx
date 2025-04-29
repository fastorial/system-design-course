import React from "react";
import { FileText, Map, HelpCircle, Play, FileTerminal, LayoutTemplate } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import content from "../data/content.json";
import { scrollToCallToAction } from "../util/ScrollUtils";

const iconMap = {
	FileText,
	Map,
	HelpCircle,
	Play,
	FileTerminal,
	LayoutTemplate,
};

const FreeResources = () => {
	const { title, subtitle, items, bgColor } = content.resources;

	return (
		<section id="bonuses" className={`py-20 ${bgColor}`}>
			<div className="container mx-auto px-4">
				<SectionTitle title={title} subtitle={subtitle} />

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{items.map((resource) => {
						const Icon = iconMap[resource.icon];
						return (
							<div
								key={resource.id}
								className="border border-slate-200 rounded-lg p-6 group hover:shadow-lg transition-all duration-300 hover:border-blue-200"
							>
								<div
									className={`${resource.bgColor} p-3 rounded-lg inline-block mb-4`}
								>
									<Icon className={`h-6 w-6 ${resource.iconColor}`} />
								</div>
								<h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
								<p className="text-slate-600 mb-4">{resource.description}</p>
								<div className="text-blue-600 text-sm font-medium group-hover:underline">
									<a href={resource?.url?.href}>{resource?.url?.text}</a>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-12 text-center">
					<p className="text-xl font-medium text-slate-800 mb-6">
						Get all these resources{" "}
						<span className="text-blue-600 font-semibold">instantly</span> when you join
						the waitlist today!
					</p>
					<Button size="lg" onClick={scrollToCallToAction}>
						Join Waitlist Now
					</Button>
				</div>
			</div>
		</section>
	);
};

export default FreeResources;
