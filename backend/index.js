const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

//env config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
const corsOptions = {
    origin: [
        "https://mymunc.com", // replace with your frontend
        // "http://localhost:3000" // for local dev
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use('/upload', express.static(path.join(__dirname, 'public','upload')));

//routes
app.use("/api/v1/user", require('./routes/userRoutes'));
app.use("/api/v1/blog", require('./routes/blogRoutes'));
app.use("/api/v1/category", require('./routes/categoryRoutes'));
app.use("/api/v1/comment", require('./routes/commentRoutes'));
app.use("/api/v1/like", require('./routes/likeRoutes'));
app.use("/api/v1/admin", require('./routes/adminRoutes'));
app.use("/api/demo", require("./routes/demo.js"));
app.use("/api/contact", require("./routes/contactRoutes.js"));


const buildPath = path.join(__dirname, '../frontend/build');

// Serve static files from the build directory
app.use(express.static(buildPath));

// Fallback route to serve index.html for any GET request that doesn't match a static file
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});






//listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
