
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

// LISTINGS API
app.use("/api/listings", listingRoutes);

// REVIEWS (TRUST) API
app.use("/api/reviews", reviewRoutes);

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
