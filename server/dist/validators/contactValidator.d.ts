import { z } from "zod";
export declare const contactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    company: z.ZodOptional<z.ZodString>;
    service: z.ZodEnum<{
        META_ADS: "META_ADS";
        GOOGLE_ADS: "GOOGLE_ADS";
        VIDEO_EDITING: "VIDEO_EDITING";
        UI_UX: "UI_UX";
        SAAS_DEV: "SAAS_DEV";
    }>;
    message: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=contactValidator.d.ts.map