
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

// LISTING API
app.use("/api/listings", listingRoutes);

// ==================
// TEST ROUTE (OPTIONAL)
// ==================
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ==================
// EXPORT APP
// ==================
module.exports = app;
