export const scrollToCallToAction = (e) => {
	scrollToDivById(e, "call-to-action");
};

export const scrollToRoadmapGenerator = (e) => {
	scrollToDivById(e, "roadmap");
};

const scrollToDivById = (e, divId) => {
	e.preventDefault();
	const resourcesSection = document.getElementById(divId);
	if (resourcesSection) {
		resourcesSection.scrollIntoView({ behavior: "smooth" });
	}
};
