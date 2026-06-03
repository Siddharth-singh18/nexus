import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }: { to: string, subject: string, html: string }) => {
  // In a real scenario you would configure this with a proper SMTP or Resend
  console.log("Sending email to:", to);
  console.log("Subject:", subject);
  console.log("HTML:", html);
  
  // Fake delay
  await new Promise(resolve => setTimeout(resolve, 500));
};
