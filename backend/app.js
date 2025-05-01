import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import path from "path";
import { fileURLToPath } from "url";

config({ path: "./config.env" });

const app = express();
const router = express.Router();

// Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "*"],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email Route
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "kuldeepnarwar586@gmail.com",
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

app.use(router);

// === Serve React Frontend in Production ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../frontend/build");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// === Start Server ===
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
