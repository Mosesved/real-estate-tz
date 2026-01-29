const express = require("express");
const router = express.Router();

const {
  createListing,
  getAllListings,
  getSingleListing,
  updateListing,
  deleteListing,
} = require("./listing.controller");

// CREATE
router.post("/", createListing);

// READ ALL
router.get("/", getAllListings);

// READ ONE
router.get("/:id", getSingleListing);

// UPDATE
router.put("/:id", updateListing);

// DELETE
router.delete("/:id", deleteListing);

module.exports = router;
