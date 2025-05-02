import express from "express";
import { config } from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./utils/sendEmail.js";

// Setup
const app = express();
config({ path: "./config.env" });

// For __dirname with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route
app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: "Kuldeepnarwar586@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// ==== Serve Frontend Static Files (for Render) ====
const frontendPath = path.join(__dirname, "./client/dist"); // or build, depending on framework

app.use(express.static(frontendPath));

// SPA fallback (React Router support)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
