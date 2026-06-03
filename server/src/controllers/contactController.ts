import { Request, Response } from "express";
import { prisma } from "../config/database";
import { contactSchema } from "../validators/contactValidator";
import { sendEmail } from "../services/emailService";

export const submitContact = async (req: Request, res: Response) => {
  try {
    const validatedData = contactSchema.parse(req.body);

    const lead = await prisma.contactLead.create({
      data: {
        ...validatedData,
        ipAddress: req.ip,
      },
    });

    await sendEmail({
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
  } catch (error: any) {
    if (error.name === "ZodError") {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error("Error submitting contact:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
