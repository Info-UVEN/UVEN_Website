import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // ✅ create transporter (Gmail + App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // your gmail app password
      },
    });

    // ✅ define mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,          // sender email
      to: process.env.RECEIVER_EMAIL,        // receiver email
      subject: `UVEN, ${name} contacted you!`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // ✅ send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
