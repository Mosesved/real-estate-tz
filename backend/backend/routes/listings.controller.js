import Listing from "../models/listing.model.js";

export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch listings" });
  }
};
