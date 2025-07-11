
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email, "Name:", name);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["contact@heidigital.info"],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the contact form on heidigital.info</small></p>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Heidi Digital <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting us!",
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </p>
        <p>Best regards,<br>The Heidi Digital Team</p>
        <hr>
        <p><small>This is an automated confirmation email.</small></p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        businessEmail: businessEmailResponse,
        userEmail: userEmailResponse 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
