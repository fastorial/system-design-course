import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
	try {
		const { email, name } = await req.json();

		const html = await Deno.readTextFile("./email-template.html");

		const { error } = await resend.emails.send({
			from: "Fastorial System Design Course <systemdesign@fastorial.dev>",
			to: email,
			subject: "Welcome to the System Design Waitlist 🎉",
			reply_to: "anushibinj@fastorial.dev",
			html,
		});

		if (error) {
			return new Response(JSON.stringify({ error }), { status: 500 });
		}

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		return new Response(JSON.stringify({ error: err.message }), { status: 400 });
	}
});
