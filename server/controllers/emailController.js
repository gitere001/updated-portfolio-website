import postmark from "postmark";

export async function handleContactForm(req, res) {
  const { name, email: userEmail, message } = req.body;
  const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

  // Validate inputs
  if (!name || !userEmail || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields (name, email, message) are required"
    });
  }

  try {
    // 1. Send form submission to your email (you receive the message)
    const submissionResult = await client.sendEmail({
      From: process.env.FROM_EMAIL,
      To: process.env.FROM_EMAIL,
      ReplyTo: userEmail,
      Subject: `New Contact from ${name}`,
      HtmlBody: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${userEmail}">${userEmail}</a></p>
        <p><strong>Message:</strong></p>
        <div style="background:#f5f5f5; padding:10px; border-left:3px solid #ccc; margin:10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `,
      MessageStream: "outbound", // ✅ must be outbound or omitted
      Tag: "contact-form"
    });

    // 2. Send acknowledgment email to the user
    const acknowledgmentResult = await client.sendEmail({
      From: process.env.FROM_EMAIL,
      To: userEmail,
      Subject: `Thanks for contacting me, ${name}!`,
      HtmlBody: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! I've received your message and will get back to you soon.</p>

        <h4>Your message:</h4>
        <div style="background:#f9f9f9; padding:10px; border-left:3px solid #eee; margin:10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>

        <p>If you have any additional information to share, just reply to this email.</p>
        <p>Best regards,<br>James</p>
      `,
      MessageStream: "outbound", // ✅ again, outbound
      Tag: "contact-acknowledgment"
    });

    // Send success response
    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
      submissionId: submissionResult.MessageID,
      acknowledgmentId: acknowledgmentResult.MessageID
    });

  } catch (error) {
    console.error("Postmark error:", error);

    res.status(error.response?.status || 500).json({
      success: false,
      error: "Failed to send message",
      details: error.message
    });
  }
}
