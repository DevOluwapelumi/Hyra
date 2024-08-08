import { dbConnection } from "@/db/db";
import User from "@/model/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

dbConnection();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();

    const { username, password } = reqBody;

    const user = await User.findOne({ username: username });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "Login Successful",
      success: true,
      user,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
