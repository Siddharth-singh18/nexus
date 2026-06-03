"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestimonials = void 0;
const database_1 = require("../config/database");
const getTestimonials = async (req, res) => {
    try {
        const testimonials = await database_1.prisma.testimonial.findMany({
            where: { published: true },
            orderBy: { createdAt: "desc" },
        });
        res.status(200).json(testimonials);
    }
    catch (error) {
        console.error("Error fetching testimonials:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getTestimonials = getTestimonials;
