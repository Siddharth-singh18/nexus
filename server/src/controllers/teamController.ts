import { Request, Response } from "express";
import { prisma } from "../config/database";

export const getTeam = async (req: Request, res: Response) => {
  try {
    const team = await prisma.teamMember.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: "asc" },
    });
    res.status(200).json(team);
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
