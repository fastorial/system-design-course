import { useEffect, useState } from "react";
import { getSignupCount } from "../data/Database";

const CACHE_KEY = "signup_count_cache";
const CACHE_TTL = 60 * 1000; // 1 minute

export default function SignedUpUsersCount() {
	const [signedUpUsersCount, setSignedUpUsersCount] = useState(null);

	useEffect(() => {
		const fetchSignedUpUsersCount = async () => {
			const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
			const now = Date.now();

			if (cached && now - cached.timestamp < CACHE_TTL) {
				setSignedUpUsersCount(cached.count);
			} else {
				const countFromDb = await getSignupCount();
				setSignedUpUsersCount(countFromDb);
				localStorage.setItem(
					CACHE_KEY,
					JSON.stringify({ count: countFromDb, timestamp: now })
				);
			}
		};

		fetchSignedUpUsersCount();
	}, []);

	return <>{signedUpUsersCount == null ? "..." : signedUpUsersCount}</>;
}
