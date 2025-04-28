import React from "react";
import { Code2, Linkedin, Youtube } from "lucide-react";
import content from "../data/content.json";

const Footer = () => {
	const { quickLinks, resources, contact, social } = content.footer;
	const { title } = content.siteInfo;

	return (
		<footer className="bg-slate-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center mb-8">
					<div className="flex items-center mb-6 md:mb-0">
						<Code2 className="h-8 w-8 text-blue-400 mr-2" />
						<span className="font-bold text-xl">{title}</span>
					</div>

					<div className="flex space-x-4">
						<a
							href={social.linkedin}
							className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
						>
							<Linkedin size={20} />
						</a>
						<a
							href={social.youtube}
							className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors"
						>
							<Youtube size={20} />
						</a>
					</div>
				</div>

				<div className="flex flex-col md:flex-row justify-between">
					<div className="md:w-1/3 mb-6 md:mb-0">
						<h3 className="font-semibold text-lg mb-3">About {title}</h3>
						<p className="text-slate-300">
							Fastorial started as a{" "}
							<a className="text-blue-400 hover:text-blue-300" href={social.youtube}>
								YouTube channel
							</a>{" "}
							where I upload fast tutorials. I value your time. So I keep all my
							videos super short and straight to the point. If you are into that type
							of content, feel free to check out my videos and if you like them,
							subscribe for more such content. Thanks for stopping by!
						</p>
					</div>
					{
						// No Quick Links and Resources for now
					}

					<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
						{/*
						<div>
							<h3 className="font-semibold text-lg mb-3">Quick Links</h3>
							<ul className="space-y-2">
								{quickLinks.map((link, index) => (
									<li key={index}>
										<a
											href={link.href}
											className="text-slate-300 hover:text-white"
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="font-semibold text-lg mb-3">Resources</h3>
							<ul className="space-y-2">
								{resources.map((link, index) => (
									<li key={index}>
										<a
											href={link.href}
											className="text-slate-300 hover:text-white"
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
 */}
						<div className="col-span-2 md:col-span-1">
							<h3 className="font-semibold text-lg mb-3">Contact</h3>
							<p className="text-slate-300 mb-2">Have questions about the course?</p>
							<a
								href={`mailto:${contact.email}`}
								className="text-blue-400 hover:text-blue-300"
							>
								{contact.email}
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
					<p>
						© {new Date().getFullYear()} {title}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
