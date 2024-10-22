import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await connectDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required!" });
    }

    const emailExists = await User.findOne({ email });
    if (!emailExists) {
      return res.status(400).json({ msg: "Please register first!" });
    }

    const passwordMatched = await bcrypt.compare(password, emailExists.password);
    if (!passwordMatched) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    // Hardcoded secret for development
    const token = jwt.sign({ id: emailExists._id }, "your_secret_key_here", {
      expiresIn: "30d",
    });

    return res.status(200).json({ msg: "Logged in successfully!", token });
  }

  return res.status(405).json({ msg: "Method not allowed!" });
}
