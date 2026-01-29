const express = require("express");
const app = express();

// ==================
// MIDDLEWARE
// ==================
app.use(express.json());

// ==================
// ROUTES
// ==================
const listingRoutes = require("../listings/listing.routes");
const reviewRoutes = require("../reviews/review.routes");
const authRoutes = require("../auth/auth.routes");
const mediaRoutes = require("../media/media.routes");

// LISTINGS API
app.use("/api/listings", listingRoutes);

// REVIEWS (TRUST) API
app.use("/api/reviews", reviewRoutes);

// AUTH (LOGIN / SIGNUP) API
app.use("/api/auth", authRoutes);

// MEDIA (IMAGES & VIDEOS) API
app.use("/api/media", mediaRoutes);

// ==================
// TEST ROUTE
// ==================
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ==================
// EXPORT APP
// ==================
module.exports = app;
