import { useEffect, useState } from "react";
import { getSignupCount } from "../data/Database";

export default function SignedUpUsersCount() {
	const [signedUpUsersCount, setSignedUpUsersCount] = useState(null);

	useEffect(() => {
		fetchSignedUpUsersCount();
	}, []);

	const fetchSignedUpUsersCount = async () => {
		const signedUpUsersCountFromDb = await getSignupCount();
		setSignedUpUsersCount(signedUpUsersCountFromDb);
	};

	return <>{signedUpUsersCount == null ? "..." : signedUpUsersCount}</>;
}
