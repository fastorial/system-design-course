import React from "react";
import { Star } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import content from "../data/content.json";

const Testimonials = () => {
	const testimonials = content.testimonials;

	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<SectionTitle
					title="What Students Are Saying"
					subtitle="Hear from viewers who have already benefited from my teaching style. All testimonials are from my 'Fastorial' youtube channel."
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
						>
							{/* <div className="flex mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className={`h-5 w-5 ${
											i < testimonial.rating
												? "text-yellow-400 fill-yellow-400"
												: "text-slate-300"
										}`}
									/>
								))}
							</div> */}

							<p className="text-slate-700 mb-4">"{testimonial.content}"</p>

							<div className="flex items-center">
								{/* <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="h-full w-full object-cover"
									/>
								</div> */}

								<div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-3">
									<span className="font-medium text-gray-600 dark:text-gray-300">
										{`${testimonial?.name?.charAt(0)?.toUpperCase() ?? "U"}`}
									</span>
								</div>

								<div>
									<h4 className="font-semibold">@{testimonial.name}</h4>
									<p className="text-sm text-slate-600">Youtube audience</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
