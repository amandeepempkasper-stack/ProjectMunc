const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const DemoRequest = require("../models/DemoRequest");

// Demo credentials per product
const demoCredentials = {
  HRMS: [
    { role: "Admin", username: "admin@hrms.com", password: "admin123" },
    { role: "HR", username: "hr@hrms.com", password: "hr123" },
    { role: "Manager", username: "manager@hrms.com", password: "manager123" },
    { role: "Employee", username: "employee@hrms.com", password: "employee123" },
  ],
  LMS: [
    { role: "Admin", username: "admin@lms.com", password: "admin123" },
    { role: "Trainer", username: "trainer@lms.com", password: "trainer123" },
    { role: "Student", username: "student@lms.com", password: "student123" },
  ],
  IMS: [
    { role: "Admin", username: "admin@ims.com", password: "admin123" },
    { role: "Seller", username: "seller@ims.com", password: "seller123" },
    { role: "Customer", username: "customer@ims.com", password: "customer123" },
  ],
  ChatApp: [
    { role: "Admin", username: "admin@chatapp.com", password: "admin123" },
    { role: "User", username: "user@chatapp.com", password: "user123" },
  ],
};

// Domain per product
const productDomains = {
  HRMS: "https://hrms.mymunc.com",
  LMS: "https://lms.mymunc.com",
  IMS: "https://ims.mymunc.com",
  ChatApp: "https://chatapp.mymunc.com",
};

// POST request to handle demo form
router.post("/", async (req, res) => {
  try {
    const { name, companyName, email, phone, product } = req.body;

    if (!name || !companyName || !email || !phone || !product) {
      return res.status(400).json({ error: "All fields are required" });
    }

    console.log("Received demo request for:", product);

    // Save request in database
    const newRequest = new DemoRequest({
      name,
      companyName,
      email,
      phone,
      product,
    });
    await newRequest.save();

    // Validate product selection
    const credentials = demoCredentials[product];
    const domain = productDomains[product];

    if (!credentials || !domain) {
      return res.status(400).json({ error: "Invalid product selected" });
    }

    // Build HTML email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
        <h2 style="color:#4f46e5;">Hello ${name},</h2>
        <p>Thank you for requesting a demo of <strong>${product}</strong>!</p>
        <p>Below are your login credentials for different roles:</p>
        <table style="width:100%; border-collapse:collapse; margin-top:10px;">
          <thead>
            <tr>
              <th style="border:1px solid #ddd; padding:8px; background:#f3f3f3;">Role</th>
              <th style="border:1px solid #ddd; padding:8px; background:#f3f3f3;">Username</th>
              <th style="border:1px solid #ddd; padding:8px; background:#f3f3f3;">Password</th>
            </tr>
          </thead>
          <tbody>
            ${credentials
              .map(
                (r) => `
                  <tr>
                    <td style="border:1px solid #ddd; padding:8px;">${r.role}</td>
                    <td style="border:1px solid #ddd; padding:8px;">${r.username}</td>
                    <td style="border:1px solid #ddd; padding:8px;">${r.password}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
        <p style="margin-top:20px;">
          Click below to access your demo:
          <br /><br />
          <a href="${domain}" 
             style="color:#fff; background:#4f46e5; padding:10px 20px; 
                    text-decoration:none; border-radius:5px; display:inline-block;">
            Go to ${product}
          </a>
        </p>
        <p style="margin-top:30px; font-size:14px; color:#666;">
          — The MyMunc Team<br/>
          <a href="https://mymunc.com" style="color:#4f46e5;">mymunc.com</a>
        </p>
      </div>
    `;

    // ✅ Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // Verify transporter
    await transporter.verify();
    console.log("✅ Mail transporter verified successfully");

    // Send the email
    await transporter.sendMail({
      from: `"MyMunc Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Your Demo Credentials for ${product}`,
      html: htmlContent,
    });

    console.log(`📧 Demo email sent to ${email} for ${product}`);
    res.json({ success: true, message: "Demo credentials sent & saved successfully!" });
  } catch (error) {
    console.error("❌ Error sending demo email:", error);
    res.status(500).json({ error: "Internal Server Error. Please try again later." });
  }
});

// GET all demo requests
router.get("/", async (req, res) => {
  try {
    const requests = await DemoRequest.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    console.error("❌ Error fetching demo requests:", error);
    res.status(500).json({ error: "Failed to fetch demo requests" });
  }
});

module.exports = router;
