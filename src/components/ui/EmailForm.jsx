import React, { useState } from "react";
import Button from "./Button";
import { addToWaitlist } from "../../data/Database";
import SignedUpUsersCount from "../SignedUpUsersCount";

const EmailForm = () => {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email) return;

		setIsSubmitting(true);

		addToWaitlist(email)
			.then((data) => {
				console.log("Response from backend after adding to waitlist", data);
				setIsSubmitting(false);
				setIsSubmitted(true);
				setEmail("");

				// Reset success message after 3 seconds
				setTimeout(() => {
					setIsSubmitted(false);
				}, 3000);
			})
			.catch((error) => {
				console.error("Error adding to waitlist:", error);

				setIsSubmitting(false);
				setEmail("");
				setTimeout(() => {
					setIsSubmitted(false);
				}, 3000);

				if (error?.code == "23505") {
					setIsSubmitted(true);
					alert("You are already on the waitlist!");
				} else {
					alert(
						"Something went wrong. Please try again later or contact anushibin007@gmail.com."
					);
				}
			});
	};

	const scrollToResources = (e) => {
		e.preventDefault();
		const resourcesSection = document.getElementById("bonuses");
		if (resourcesSection) {
			resourcesSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const getJoinButtonText = () => {
		return (
			<>
				Join <SignedUpUsersCount />+ Engineers
			</>
		);
	};

	return (
		<div className="w-full">
			<a
				href="#bonuses"
				onClick={scrollToResources}
				className="text-white/90 text-sm mb-2 text-left block hover:text-white transition-colors cursor-pointer"
			>
				<p className="flex items-center justify-center">
					<span>
						Join the waitlist to access free content. Check out the{" "}
						<span className="text-blue-400">free stuff</span>
					</span>
				</p>
			</a>
			<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your email address"
					className="flex-1 px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
					required
				/>
				<Button
					type="submit"
					size="md"
					disabled={isSubmitting}
					className="whitespace-nowrap"
				>
					{isSubmitting ? "Joining..." : isSubmitted ? "Success! ✓" : getJoinButtonText()}
				</Button>
			</form>
		</div>
	);
};

export default EmailForm;
