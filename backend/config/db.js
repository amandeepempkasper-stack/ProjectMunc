const mongoose = require('mongoose');
const colors= require ('colors');



const connectDB= async()=> { //get connection with function
    try{
       // Log the MONGO_URL to verify it is not undefined
        //console.log("MongoDB URI:", process.env.MONGO_URL);
 await mongoose.connect(process.env.MONGO_URL);//ENVIRONMENTAL VARIABLES
 //console.log(`Connected to Mongodb database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error){
 //console.log(`MONGO connect Error ${error}`.bgRed.white);
    }

};
module.exports = connectDB;