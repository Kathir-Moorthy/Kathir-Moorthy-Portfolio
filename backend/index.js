require("dotenv").config();
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const upload = multer({ dest: "/tmp/uploads/" }); // Use /tmp for serverless environments

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define schema and model for credentials
const credentialSchema = new mongoose.Schema({
  user: String,
  pass: String,
});

const Credential = mongoose.model("Msg", credentialSchema, "Msg");

// POST endpoint for contact form
app.post("/api/contact", upload.single("file"), async (req, res) => {
  const { name, email, message } = req.body;
  const file = req.file;

  try {
    // Fetch credentials from MongoDB
    const credentials = await Credential.findOne();
    if (!credentials) {
      console.error("Email credentials not found");
      return res.status(500).json({ error: "Email credentials not found" });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: credentials.user,
        pass: credentials.pass,
      },
    });

    // Prepare email options
    const mailOptions = {
      from: email,
      to: "kathirmoorthybsb@gmail.com", // Replace with your email
      subject: `Message from ${name}`,
      text: message,
      attachments: file
        ? [
            {
              filename: file.originalname,
              path: file.path,
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Message sent successfully!");
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the app for Vercel (required for serverless deployment)
module.exports = app;