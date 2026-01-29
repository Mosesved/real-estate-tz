// ==================
// ROUTES
// ==================
const listingRoutes = require("../listings/listing.routes");
const reviewRoutes = require("../reviews/review.routes");
const authRoutes = require("../auth/auth.routes");

// LISTINGS API
app.use("/api/listings", listingRoutes);

// REVIEWS (TRUST) API
app.use("/api/reviews", reviewRoutes);

// AUTH (LOGIN / SIGNUP) API
app.use("/api/auth", authRoutes);
