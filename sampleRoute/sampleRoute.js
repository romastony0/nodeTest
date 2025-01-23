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

app.put("/test/:id", (req, res) => {
  res.json({
    message: `Test For sampleRoute ${req.params.id}`,
  });
});

app.post("/test/:id", (req, res) => {
  res.json({
    message: `Test For sampleRoute ${req.params.id}`,
  });
});
export default app;
