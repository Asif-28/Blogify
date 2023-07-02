// import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbConnect } from "../../../config/dbConnect";
import User from "../../../models/users";

export async function handler(req, res) {
  try {
    if (req.method == "POST") {
      dbConnect();
      const reqBody = await req.json();
      const { email, password } = reqBody;
      console.log(reqBody);
      const user = await User.findOne({ email });
      console.log("user exists");
      //check if password is correct
      const validPassword = await bcryptjs.compare(password, user.password);
      if (!validPassword) {
        return res.json({ error: "Invalid password" }, { status: 400 });
      }
      console.log(user);
      //create token data
      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
      };
      const token = jwt.sign(user, tokenData, process.env.TOKEN_SECRET, {
        expiresIn: "10d",
      });

      res.json({
        message: "Login successful",
        success: true,
      });
      res.cookies.set("token", token, {
        httpOnly: true,
      });
      return res;
    }
  } catch (error) {
    // return res.json({ error: error.message }, { status: 500 });
    return console.log(error);
  }
}
