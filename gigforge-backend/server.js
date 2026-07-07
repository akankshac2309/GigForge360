require("dotenv").config();

const express = require("express");
const cors = require("cors");

const salesforceRoutes = require("./routes/salesforce");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", salesforceRoutes);

app.get("/", (req, res) => {
    res.send("GigForge Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});