"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContact = void 0;
const database_1 = require("../config/database");
const contactValidator_1 = require("../validators/contactValidator");
const emailService_1 = require("../services/emailService");
const submitContact = async (req, res) => {
    try {
        const validatedData = contactValidator_1.contactSchema.parse(req.body);
        const lead = await database_1.prisma.contactLead.create({
            data: {
                ...validatedData,
                ipAddress: req.ip,
            },
        });
        await (0, emailService_1.sendEmail)({
            to: process.env.ADMIN_EMAIL || "team@nexusstudio.in",
            subject: `New Lead: ${validatedData.name} — ${validatedData.service}`,
            html: `
        <h2>New Lead from Nexus Studio</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Company:</strong> ${validatedData.company || "N/A"}</p>
        <p><strong>Service:</strong> ${validatedData.service}</p>
        <p><strong>Message:</strong> ${validatedData.message}</p>
      `,
        });
        res.json({ success: true, message: "We'll get back to you within 24 hours!" });
    }
    catch (error) {
        if (error.name === "ZodError") {
            return res.status(400).json({ success: false, errors: error.errors });
        }
        console.error("Error submitting contact:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.submitContact = submitContact;
//# sourceMappingURL=contactController.js.map