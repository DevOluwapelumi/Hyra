import { dbConnection } from "@/db/db";
import { getTeachings } from "@/controller/teachingController";
import { NextResponse } from "next/server";

dbConnection();

export async function GET() {
  const teachings = await getTeachings();
  return NextResponse.json({ teachings });
}
