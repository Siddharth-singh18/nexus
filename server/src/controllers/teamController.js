"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeam = void 0;
const database_1 = require("../config/database");
const getTeam = async (req, res) => {
    try {
        const team = await database_1.prisma.teamMember.findMany({
            where: { isActive: true },
            orderBy: { displayOrder: "asc" },
        });
        res.status(200).json(team);
    }
    catch (error) {
        console.error("Error fetching team:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getTeam = getTeam;
//# sourceMappingURL=teamController.js.map