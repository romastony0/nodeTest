import express from "express";
import sampleRoute from "./sampleRoute/sampleRoute.js";
const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("/", sampleRoute);
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
