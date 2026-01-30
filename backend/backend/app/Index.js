import express from "express";
import listingRoutes from "../routes/listing.routes.js";

const app = express();

app.use(express.json());

app.use("/api/listings", listingRoutes);

export default app;
