const express=  require('express')
const cors=  require('cors')
const morgan=  require('morgan')
const colors=  require('colors')
const dotenv= require('dotenv')
const connectDB = require('./config/db')
const path = require('path');


//env config
dotenv.config();

//router import
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const adminRoutes = require('./routes/adminRoutes');

//mongodb connection
connectDB();
//rest object
const app=express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/upload', express.static(path.join(__dirname, 'public','upload')));


//routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/blog",blogRoutes);
app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/comment",commentRoutes);
app.use("/api/v1/like",likeRoutes);
app.use("/api/v1/admin",adminRoutes);




const PORT= process.env.PORT || 8080

//listen
app.listen(PORT, "0.0.0.0",()=>{
    console.log(`Server running on http://localhost:${PORT}`);
}); 