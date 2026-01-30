import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  message: String,
  propertyId: String,
  status: { type: String, default: "pending" }
}, { timestamps: true });

export default mongoose.model("Interaction", interactionSchema);
