const express = require("express");
const cors = require("cors");

const syncRoute = require("./routes/sync");

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/sync", syncRoute);

app.get("/", (req, res) => {
  res.send("Vet Sync Server Running");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
