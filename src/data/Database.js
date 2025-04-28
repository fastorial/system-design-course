/**
 * The Supabase DB client
 */
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://wqmfwlapmmmtmihqhjnr.supabase.co";
const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxbWZ3bGFwbW1tdG1paHFoam5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NTY3MjgsImV4cCI6MjA2MTQzMjcyOH0.0R18JHpNtCsFkYTZ9ojC9PvlD8ozVS0f8xk4Gs1yaqI";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function addToWaitlist(email) {
	if (!email) {
		throw new Error("Email is required");
	}

	const { data, error } = await supabase.from("sys_design_waitlist_signups").insert([{ email }]);

	if (error) {
		console.error("Error adding to waitlist:", error);
		throw error;
	}

	return data;
}
