import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from 'next/server';
const filePath = path.join(process.cwd(), "data", "projects.json");

export interface formTypes {
  id: number;
  name: string;
  stacks: string;
  short_list?: Array<string>;
  description?: string;
  website?: string;
  repository?: string;
  images?: string[];
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

export async function  PUT (req: NextRequest) {
  const body = await req.json();
  try {
    let fileData = fs.readFileSync(filePath, "utf8");
    if (!body.name || !body.stacks) {
      return NextResponse.json({ message: "All fields are required" });
    }

    if (!fileData) {
      return NextResponse.json({ message: "At first you need to create a new project" });
    }

    fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    
    const newData = data.map((item: formTypes) => {
      if (item.id === body.id) {
        return body;
      }
      return item;
    });

    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));

    return NextResponse.json({ message: "project updated successfully" });
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
    const newData = data.filter((item: formTypes) => item.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2));
    return NextResponse.json({ message: "Data deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: error });
  }
}