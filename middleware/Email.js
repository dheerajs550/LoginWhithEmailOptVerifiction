
import { Resend } from "resend";
import { getEmailTemplate, getWelcomeTemplate } from "../libs/EmailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendVerfionCode = async (email, verficationCode, name) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",  // free domain from Resend
      to: email,
      subject: "Verify your Email ✔",
      html: getEmailTemplate(name, verficationCode),
    });
    console.log("Verification email sent:", response);
  } catch (error) {
    console.error("Email error:", error);
  }
};

export const welcomeEmail = async (email, name) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome Email ✔",
      html: getWelcomeTemplate(name),
    });
    console.log("Welcome email sent:", response);
  } catch (error) {
    console.error("Welcome email error:", error);
  }
};
