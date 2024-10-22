import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are mandatory!" });
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ msg: "User already registered!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    
    // Hardcoded secret for development
    const token = jwt.sign({ id: newUser._id }, "your_secret_key_here", {
      expiresIn: "30d",
    });

    return res.status(201).json({ msg: "Registered successfully!", token });
  }

  return res.status(405).json({ msg: "Method not allowed!" });
}
