import React, { useState } from "react";
import { Clock, BookOpen, ArrowRight, Map } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import content from "../data/content.json";
import { scrollToCallToAction } from "../util/ScrollUtils";

const RoadmapGenerator = () => {
	const [experience, setExperience] = useState("");
	const [duration, setDuration] = useState("");
	const modules = content.syllabus.modules;
	const { title, subtitle } = content.roadmapgenerator;

	const generateRoadmap = () => {
		if (!experience || !duration) return null;

		const roadmaps = {
			beginner: {
				2: [
					{
						day: 1,
						modules: [1, 2, 3],
						note: "Focus on fundamentals and core concepts",
					},
					{
						day: 2,
						modules: [4, 5, 6],
						note: "Complete with cheat sheets and quick previews",
					},
				],
				3: [
					{
						day: 1,
						modules: [1, 2],
						note: "Master the basics",
					},
					{
						day: 2,
						modules: [3, 4],
						note: "Deep dive into system components",
					},
					{
						day: 3,
						modules: [5, 6],
						note: "Advanced concepts and interview prep",
					},
				],
			},
			expert: {
				2: [
					{
						day: 1,
						modules: [3, 4],
						note: "Advanced system components and design patterns",
					},
					{
						day: 2,
						modules: [5, 6],
						note: "Complex scenarios and interview mastery",
					},
				],
				3: [
					{
						day: 1,
						modules: [3],
						note: "Deep dive into distributed systems",
					},
					{
						day: 2,
						modules: [4],
						note: "Advanced patterns and real-world cases",
					},
					{
						day: 3,
						modules: [5, 6],
						note: "Interview excellence and system optimization",
					},
				],
			},
		};

		return roadmaps[experience][duration];
	};

	const roadmap = generateRoadmap();

	return (
		<section id="roadmap-generator" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<SectionTitle title={title} subtitle={subtitle} />

				<div className="max-w-3xl mx-auto">
					<div className="bg-slate-50 p-8 rounded-xl mb-8">
						<div className="space-y-6">
							<div>
								<div className="flex items-center gap-4 flex-wrap">
									<h3 className="text-lg font-semibold">
										What's your experience level?
									</h3>
									{["beginner", "expert"].map((level) => (
										<label
											key={level}
											className={`inline-flex items-center px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
												experience === level
													? "border-blue-500 bg-blue-50"
													: "border-slate-200 hover:border-blue-200"
											}`}
										>
											<input
												type="radio"
												name="experience"
												value={level}
												checked={experience === level}
												onChange={(e) => setExperience(e.target.value)}
												className="sr-only"
											/>
											<div
												className={`w-4 h-4 rounded-full border-2 mr-2 ${
													experience === level
														? "border-blue-500 bg-blue-500"
														: "border-slate-300"
												}`}
											/>
											<span className="capitalize">{level}</span>
										</label>
									))}
								</div>
							</div>

							<div>
								<div className="flex items-center gap-4 flex-wrap">
									<h3 className="text-lg font-semibold">
										How much time do you have?
									</h3>
									{["2", "3"].map((days) => (
										<label
											key={days}
											className={`inline-flex items-center px-4 py-2 rounded-lg border-2 cursor-pointer transition-all ${
												duration === days
													? "border-blue-500 bg-blue-50"
													: "border-slate-200 hover:border-blue-200"
											}`}
										>
											<input
												type="radio"
												name="duration"
												value={days}
												checked={duration === days}
												onChange={(e) => setDuration(e.target.value)}
												className="sr-only"
											/>
											<div
												className={`w-4 h-4 rounded-full border-2 mr-2 ${
													duration === days
														? "border-blue-500 bg-blue-500"
														: "border-slate-300"
												}`}
											/>
											<span>{days} Days</span>
										</label>
									))}
								</div>
							</div>
						</div>
					</div>

					{roadmap && (
						<div className="animate-fade-in space-y-4">
							<div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg">
								<div className="flex items-center gap-2 text-white mb-5">
									<Map className="w-5 h-5" />
									<h3 className="text-xl font-semibold">
										Your Personalized Learning Path
									</h3>
								</div>

								<div className="space-y-4">
									{roadmap.map((day, index) => (
										<div
											key={index}
											className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
										>
											<div className="flex text-slate-700 items-center mb-4">
												<Clock className="w-5 h-5 text-blue-500 mr-2" />
												<h4 className="font-semibold">Day {day.day}</h4>
											</div>

											<div className="space-y-3">
												{day.modules.map((moduleId) => {
													const module = modules[moduleId - 1];
													return (
														<div
															key={moduleId}
															className="flex items-start text-slate-700"
														>
															<BookOpen className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
															<div>
																<div className="font-medium">
																	Module {moduleId}:{" "}
																	{module.title}
																</div>
																<p className="text-sm text-slate-600">
																	{module.description}
																</p>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="text-center mt-8">
								<Button size="lg" onClick={scrollToCallToAction}>
									Get Started with This Plan
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default RoadmapGenerator;
