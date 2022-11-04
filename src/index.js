const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

//add routes
app.get('/', (req, res) => {
    res.send("F1 API DATA")
});

//connection to mongodb
mongoose
.connect(process.env.URI_FOR_MONGODB)
.then(() => console.log("conected to database"))
.catch((error) => console.error(error));

app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
});