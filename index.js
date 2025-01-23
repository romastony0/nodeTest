import express from "express";
import sampleRoute from "./sampleRoute/sampleRoute.js";
import mongoose from "mongoose";
import studentModel from "./models/student.model.js";
const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use("/", sampleRoute);

app.post("/login", async (req, res) => {
  try {
    await studentModel.create(req.body);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
mongoose
  .connect(
    "mongodb+srv://romastony0:GWlCJ7jhvePGnjtK@backenddbtraining.e225l.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDBTraining"
  )
  .then(() => {
    console.log("Connected to DB");

    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
