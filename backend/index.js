require("dotenv").config();
const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-route")

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
// ({
//     origin: process.env.CLIENT_URL,
//     // origin: "http://localhost:5173/",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: ["Content-Type", "Authorization"],
// })

app.use(express.json());//handling middleware

const db = () => {
    try {
        mongoose.connect(MONGO_URL);
        console.log("successfully connected to db")
    } catch (err) {
        console.log("couldnt connect to db")
    }
}

app.use('/auth',authRoutes)

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message:"something went wrong"
    })
})

app.listen(PORT, () => {
    db();
    console.log(`server is running on port ${PORT}`)
})