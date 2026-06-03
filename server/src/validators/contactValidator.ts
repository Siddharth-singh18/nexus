import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().min(5, "Contact info must be valid"),
  company: z.string().optional(),
  service: z.enum(["META_ADS", "GOOGLE_ADS", "VIDEO_EDITING", "UI_UX", "SAAS_DEV"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
