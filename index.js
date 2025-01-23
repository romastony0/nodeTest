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

//user Login
app.post("/userLogin", async (req, res) => {
  try {
    const user = await studentModel.findOne({ email: req.body.email });
    const password = await studentModel.findOne({
      password: req.body.password,
    });
    if (user && password) {
      res.status(200).json({ message: "User Found Successfully" });
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//user Sign Up
app.post("/userSignUp", async (req, res) => {
  try {
    await studentModel.create(req.body);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//user Delete
app.delete("/userDelete/:user_id", async (req, res) => {
  try {
    await studentModel.deleteOne({ user_id: req.params.user_id });
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//user Update
app.put("/userUpdate/:user_id", async (req, res) => {
  try {
    await studentModel.updateOne({ user_id: req.params.user_id }, req.body);
    res.status(200).json({ message: "User Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mongoose
  // .connect(
  //   "mongodb+srv://romastony0:GWlCJ7jhvePGnjtK@backenddbtraining.e225l.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDBTraining"
  // )
  .then(() => {
    console.log("Connected to DB");

    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
