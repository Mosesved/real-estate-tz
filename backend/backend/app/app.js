import express from "express";
import cors from "cors";
import listingRoutes from "./routes/listing.routes.js";
import interactionRoutes from "./routes/interaction.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/listings", listingRoutes);
app.use("/api/interactions", interactionRoutes);

export default app;
