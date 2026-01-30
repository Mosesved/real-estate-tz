import express from "express";
import Listing from "../models/Listing.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const listings = await Listing.find();
  res.json(listings);
});

router.post("/", async (req, res) => {
  const listing = await Listing.create(req.body);
  res.json(listing);
});

export default router;
