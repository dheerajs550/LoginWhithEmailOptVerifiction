// in this file we will write code for sending email using resend service, before it we are useing nodemeiler for it 
import { Resend } from "resend";
import { getEmailTemplate, getWelcomeTemplate } from "../libs/EmailTemplate.js";

// Resend client init
const resend = new Resend(process.env.RESEND_API_KEY);

// Verification email
export const SendVerfionCode = async (email, verficationCode, name) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",   // Resend ka default sender
      to: email,
      subject: "Verify your Email ✔",
      html: getEmailTemplate(name, verficationCode),
    });
    console.log("Verification email sent:", response.id);
  } catch (error) {
    console.error("Verification email error:", error);
  }
};

// Welcome email
export const welcomeEmail = async (email, name) => {
  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome Email ✔",
      html: getWelcomeTemplate(name),
    });
    console.log("Welcome email sent:", response.id);
  } catch (error) {
    console.error("Welcome email error:", error);
  }
};
