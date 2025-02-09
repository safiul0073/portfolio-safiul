import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from 'next/server';
import { formTypes } from "../route";
const filePath = path.join(process.cwd(), "data", "projects.json");

export async function GET (req: NextRequest) {
    const data = req.url
    const id = data.split("/").pop();

    if (!id) {
      return NextResponse.json({ message: "Invalid ID" });
    }

    try {
      let fileData = fs.readFileSync(filePath, "utf8");
      if (!fileData) {
        fs.writeFileSync(filePath, "[]");
      }
      fileData = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileData);
      const project = data.find((item: formTypes) => item.id === Number(id));
      return NextResponse.json(project);
    } catch (error) {
      return NextResponse.json({ message: error });
    }
  }