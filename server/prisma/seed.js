"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../src/config/database");
async function main() {
    console.log("Starting seed...");
    // Seed Team
    await database_1.prisma.teamMember.createMany({
        data: [
            { name: "Siddharth Singh", role: "Co-Founder / Full-Stack & Systems", initials: "SS", avatarUrl: "https://i.pravatar.cc/500?img=11", displayOrder: 1 },
            { name: "Prince Upadhyay", role: "Co-Founder / Frontend & UI Architecture", initials: "PU", avatarUrl: "https://i.pravatar.cc/500?img=33", displayOrder: 2 },
            { name: "Abhishek Singh", role: "Lead / Growth & Meta Ads", initials: "AS", avatarUrl: "https://i.pravatar.cc/500?img=44", displayOrder: 3 },
        ],
        skipDuplicates: true,
    });
    // Seed Portfolio
    await database_1.prisma.portfolioProject.createMany({
        data: [
            { title: "PayFlow", client: "PayFlow", category: "SAAS", description: "Fintech Web App", thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", cloudinaryPublicId: "dummy1", displayOrder: 1 },
            { title: "CloudLab", client: "CloudLab", category: "DEVELOPMENT", description: "Developer Platform", thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", cloudinaryPublicId: "dummy2", displayOrder: 2 },
            { title: "Aura Aesthetics", client: "Aura", category: "DEVELOPMENT", description: "E-Commerce", thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", cloudinaryPublicId: "dummy3", displayOrder: 3 },
        ],
        skipDuplicates: true,
    });
    // Seed Testimonials
    await database_1.prisma.testimonial.createMany({
        data: [
            { reviewerName: "Sarah Jenkins", company: "TechFlow", role: "CMO", text: "Nexus Studio completely transformed our go-to-market strategy. The new web app they built is stunning, and their ad campaigns lowered our CPA by 40%.", avatarInitials: "SJ", published: true },
            { reviewerName: "David Chen", company: "Elevate", role: "Founder", text: "Working with this team was seamless. They understood our brand vision immediately and delivered a product that exceeded our expectations in every way.", avatarInitials: "DC", published: true },
            { reviewerName: "Emily Watson", company: "Loom", role: "Director", text: "Their UI/UX expertise is unmatched. The design is not only beautiful but incredibly intuitive. Our user retention has doubled since launch.", avatarInitials: "EW", published: true },
            { reviewerName: "Marcus Johnson", company: "GrowthCo", role: "CEO", text: "Nexus doesn't just build websites; they build scalable businesses. The full-stack SaaS platform they developed for us is rock solid.", avatarInitials: "MJ", published: true },
            { reviewerName: "Lisa Ray", company: "Sync", role: "Marketing VP", text: "The best agency experience we've ever had. Fast, responsive, and incredibly talented. They are now an extension of our own team.", avatarInitials: "LR", published: true },
        ],
        skipDuplicates: true,
    });
    console.log("Seeding finished.");
}
main()
    .catch((e) => {
    console.error(e);
    throw e;
})
    .finally(async () => {
    await database_1.prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map