const express = require('express');
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());
app.use(cors());


// connnect database

const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log("connected database");
    } catch (error) {
        console.log(error);
    }
    console.log(`server running port on ${PORT}`)
});

module.exports = app;