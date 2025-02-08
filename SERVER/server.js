const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, "PORTFOLIO")));

// Serve main HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "PORTFOLIO", "main.html"));
});

// Contact form route
app.post("/contact", (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    console.log("New Contact Form Submission:", { firstName, lastName, email, message });

    res.json({ success: true, message: "Message received!" });
});

// Resume download route
app.get("/download-resume", (req, res) => {
    res.download(path.join(__dirname, "public", "resume.pdf"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
