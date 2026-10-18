import express from "express";

const app = express();

const PORT = 4500;

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log("Server is running");
});
