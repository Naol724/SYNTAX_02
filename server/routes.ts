import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {

  // POST /api/contact — submit a contact form message
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          success: false,
          message: "Invalid input. Please fill in all required fields.",
          errors: result.error.flatten().fieldErrors,
        });
      }

      const msg = await storage.createContactMessage(result.data);
      res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: msg,
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      res.status(500).json({ success: false, message: "Server error. Please try again later." });
    }
  });

  // GET /api/messages — retrieve all contact messages (admin/testing)
  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ success: false, message: "Server error." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
