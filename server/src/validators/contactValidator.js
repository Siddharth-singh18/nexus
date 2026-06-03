"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactSchema = void 0;
const zod_1 = require("zod");
exports.contactSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().min(5, "Contact info must be valid"),
    company: zod_1.z.string().optional(),
    service: zod_1.z.enum(["META_ADS", "GOOGLE_ADS", "VIDEO_EDITING", "UI_UX", "SAAS_DEV"]),
    message: zod_1.z.string().min(10, "Message must be at least 10 characters"),
});
//# sourceMappingURL=contactValidator.js.map