import  { getEmailTemplate, getWelcomeTemplate } from "../libs/EmailTemplate.js";
import { transporter } from "./Emailconfig.js";

export const SendVerfionCode=async(email, verficationCode,name)=>{
    try {
         const response = await transporter.sendMail({
                       from: '"Maddison Foo Koch" <dheerajsharma550@gmail.com>',
                       to: email,
                       subject: "Verify your Email ✔",
                       text: "jay shree ram.....", // plain‑text body
                       html: getEmailTemplate(name,verficationCode), // HTML body
                     });
                     console.log("Email send successfully",response)
    } catch (error) {
        console.log("Email error")
    }
}

export const welcomeEmail=async(email,name)=>{
    try {
         const response = await transporter.sendMail({
                       from: '"Maddison Foo Koch" <dheerajsharma550@gmail.com>',
                       to: email,
                       subject: "Welcome Email ✔",
                       text: "WelCome Email", // plain‑text body
                       html: getWelcomeTemplate(name), // HTML body
                     });
                     console.log("Email send successfully",response)
    } catch (error) {
        console.log("Email error")
    }
}