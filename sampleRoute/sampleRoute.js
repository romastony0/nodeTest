import express from "express";

const app = express.Router();

app.get("/", (req, res) => {
  res.json({
    message: "sampleRoute",
  });
});

app.get("/test", (req, res) => {
  res.json({
    message: "Test For sampleRoute",
  });
});

export default app;
