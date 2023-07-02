import User from "../../../models/users";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import dbConnect from "../../../config/dbConnect";
dbConnect();

export default async function handler(req, res) {
  if (req.method == "POST") {
    // dbConnect();
    const { name, email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    if (user) {
      res.json({ error: "User already exists" }, { status: 400 });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
    res.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
    // const user = await User.create({ name, email, password });
    // res.status(201).json({ user });
  }
}
// export async function POST(request) {
//   try {
//     console.log("connected");
//     const reqBody = await request.json();
//     const { name, email, password } = reqBody;

//     console.log(reqBody);

//     //check if user already exists
//     const user = await User.findOne({ email });

//     if (user) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 400 }
//       );
//     }

//     //hash password
//     const salt = await bcryptjs.genSalt(10);

//     const hashedPassword = await bcryptjs.hash(password, salt);

//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     console.log(savedUser);

//     //send verification email

//     // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

//     return NextResponse.json({
//       message: "User created successfully",
//       success: true,
//       savedUser,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
