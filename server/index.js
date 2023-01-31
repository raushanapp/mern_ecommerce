const express = require('express');
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// upload to server images inside public floder
app.use("/images", express.static("public/images"));


// routes
app.use("/auth", require("./routes/auth.users.routes"));
app.use("/products", require("./routes/products.routes"));
app.use("/upload", require("./routes/productImage.routes"));


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