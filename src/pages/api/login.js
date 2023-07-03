import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "../../../config/dbConnect";
import User from "../../../models/users";
import { NextRequest, NextResponse } from "next/server";
dbConnect();
export default async function handlerLogin(req, res) {
  if (req.method == "POST") {
    const reqBody = await req.body;

    const { email, password } = reqBody;
    // console.log(email, password);

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User does not exist" }, { status: 400 });
    }
    console.log("user exists");

    //check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return res.json({ error: "Invalid password" }, { status: 400 });
    }
    console.log(user);
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    // let res = NextResponse.next();
    res.cookies.set("token", token, {
      httpOnly: true,
    });
    return res;

    // return res.status(200).json({ message: "Success" });
  }
}
