import express from "express";
import Interaction from "../models/Interaction.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const interaction = await Interaction.create(req.body);
  res.json(interaction);
});

router.get("/", async (req, res) => {
  const interactions = await Interaction.find().sort({ createdAt: -1 });
  res.json(interactions);
});

export default router;
