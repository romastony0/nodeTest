import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
  },
  mobile: {
    type: String,
    required: [true, "Please Enter Your Mobile Number"],
    unique: true,
  },
});

const Student = mongoose.model("studentLoginData", studentSchema);

export default Student;
