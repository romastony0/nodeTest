import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const studentSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      unique: true,
    },
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
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt
);

// Auto-increment user_id
studentSchema.plugin(AutoIncrement(mongoose), { inc_field: "user_id" });

const Student = mongoose.model("Student", studentSchema);

export default Student;
