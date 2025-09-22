export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Example: log or save to DB
    console.log("📩 New Contact Message:", { name, email, message });

    // You can integrate with Nodemailer, MongoDB, etc. here
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
