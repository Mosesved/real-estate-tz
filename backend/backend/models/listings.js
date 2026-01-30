import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: String,
  price: String,
  type: String,
  location: String,
  image: String,
  agentId: String
});

export default mongoose.model("Listing", listingSchema);
