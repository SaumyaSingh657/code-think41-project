
import { Router } from "express";
import Message from "../models/Message.js";

const router = Router();

router.post("/", async (req, res) => {
  const { message } = req.body || {};
  if (!message) return res.status(400).json({ error: "message is required" });

  await Message.create({ role: "user", text: message });

  const reply = `Echo: ${message}`;
  await Message.create({ role: "ai", text: reply });

  const history = await Message.find().sort({ createdAt: 1 });
  res.json({ reply, history });
});

router.get("/history", async (_req, res) => {
  const history = await Message.find().sort({ createdAt: 1 });
  res.json(history);
});

export default router;
