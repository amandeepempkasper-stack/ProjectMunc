// backend/routes/contactRoutes.js
const  express = require ("express");
const Contact= require ("../models/contactModel.js");

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, company, email, phone, queryType } = req.body;

    if (!name || !email || !queryType) {
      return res.status(400).json({ message: "Name, Email, and Product are required" });
    }

    const newContact = new Contact({
      name,
      company,
      email,
      phone,
      queryType,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact request saved successfully!" });
  } catch (err) {
    console.error("Error in /api/contact POST:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/contact
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(contacts); // <-- make sure this returns an array
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;