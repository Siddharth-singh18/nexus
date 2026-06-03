import { Request, Response } from "express";
import { prisma } from "../config/database";

export const getPortfolio = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.portfolioProject.findMany({
      orderBy: { displayOrder: "asc" },
    });
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
