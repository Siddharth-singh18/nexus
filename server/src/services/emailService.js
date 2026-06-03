"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const sendEmail = async ({ to, subject, html }) => {
    // In a real scenario you would configure this with a proper SMTP or Resend
    console.log("Sending email to:", to);
    console.log("Subject:", subject);
    console.log("HTML:", html);
    // Fake delay
    await new Promise(resolve => setTimeout(resolve, 500));
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=emailService.js.map