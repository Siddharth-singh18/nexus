"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortfolio = void 0;
const database_1 = require("../config/database");
const getPortfolio = async (req, res) => {
    try {
        const projects = await database_1.prisma.portfolioProject.findMany({
            orderBy: { displayOrder: "asc" },
        });
        res.status(200).json(projects);
    }
    catch (error) {
        console.error("Error fetching portfolio:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getPortfolio = getPortfolio;
