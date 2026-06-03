"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testimonialsController_1 = require("../controllers/testimonialsController");
const router = (0, express_1.Router)();
router.get("/", testimonialsController_1.getTestimonials);
exports.default = router;
//# sourceMappingURL=testimonials.js.map