import express from "express";
import sampleRoute from "./sampleRoute/sampleRoute.js";
import mongoose from "mongoose";
const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("/", sampleRoute);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

mongoose
  .connect(
    "mongodb+srv://romastony0:GWlCJ7jhvePGnjtK@backenddbtraining.e225l.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDBTraining"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
