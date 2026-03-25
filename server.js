const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all static files (CSS, JS, images, etc.) from the public folder
// Vercel will handle this efficiently
app.use(express.static(path.join(__dirname, "public")));

// Specific routes for your HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "projects.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Form submission handler
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.send("Error: All fields are required.");
  }

  // In a real project you could send an email here.
  // For now, just show success message
  res.send("Form submitted successfully! (This is a demo — no real email was sent)");
});

// 404 handler — must be last
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Export the app (important for Vercel serverless — no app.listen here!)
module.exports = app;
