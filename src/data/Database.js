/**
 * The Supabase DB client
 */
import { createClient } from "@supabase/supabase-js";
import {
	SUPABASE_URL,
	SUPABASE_ANON_KEY,
	SUPABASE_WAITLIST_SIGNUPS_TABLE_NAME,
} from "../util/Constants";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function addToWaitlist(email) {
	if (!email) {
		throw new Error("Email is required");
	}

	const { data, error } = await supabase
		.from(SUPABASE_WAITLIST_SIGNUPS_TABLE_NAME)
		.insert([{ email }]);

	if (error) {
		console.error("Error adding to waitlist:", error);
		throw error;
	}

	return data;
}
