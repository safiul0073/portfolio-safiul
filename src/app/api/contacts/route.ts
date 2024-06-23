import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from 'next/server';
const filePath = path.join(process.cwd(), "data", "projects.json");

export interface contactTypes {
  id: number;
  name: string;
  email: string;
  message: string;
}

export function GET(req: NextRequest) {
  try {
    let fileData = fs.readFileSync(filePath, "utf8");
    if (!fileData) {
      fs.writeFileSync(filePath, "[]");
    }
    fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function  POST (req: NextRequest) {
  const body = await req.json();
  try {
    let fileData = fs.readFileSync(filePath, "utf8");
    if (!body.name || !body.stacks) {
      return NextResponse.json({ message: "All fields are required" });
    }
    if (!fileData) {
      fs.writeFileSync(filePath, "[]");
    }

    fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    
    data.push({...body, id: data.length + 1 });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ message: "Data saved successfully" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}

export async function DELETE (req: NextRequest) {
  const { id } = await req.json();
  try {
    let fileData = fs.readFileSync(filePath, "utf8");
    if (!fileData) {
      fs.writeFileSync(filePath, "[]");
    }
    fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    const newData = data.filter((item: contactTypes) => item.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}