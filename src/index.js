const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//add routes
app.get('/', (req, res) => {
    res.send("F1 API DATA")
});

app.listen(PORT, () => {
    console.log(`server is running in http://localhost:${PORT}`);
});