import { dbConnection } from "@/db/db";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";

dbConnection();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { name, email, username, password } = reqBody;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );  
    }

    const newUser = new User({ name, email, username, password });
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({
      message: "User saved successfully",
      success: true,
      savedUser,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message });
  }
}


