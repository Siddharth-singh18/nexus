"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_1 = __importDefault(require("./routes/contact"));
const portfolio_1 = __importDefault(require("./routes/portfolio"));
const testimonials_1 = __importDefault(require("./routes/testimonials"));
const team_1 = __importDefault(require("./routes/team"));
// import adminRoutes from "./routes/admin";
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
app.use("/api/contact", contact_1.default);
app.use("/api/portfolio", portfolio_1.default);
app.use("/api/testimonials", testimonials_1.default);
app.use("/api/team", team_1.default);
// app.use("/api/admin", adminRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map