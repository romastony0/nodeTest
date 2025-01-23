import express from "express";

const app = express.Router();

app.get("/", (req, res) => {
  res.json({
    message: "sampleRoute",
  });
});

export default app;
