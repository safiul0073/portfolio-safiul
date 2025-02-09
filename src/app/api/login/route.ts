import { findUser, validatePassword } from "@/models/user";
import { generateToken } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function  POST (req: NextRequest) {
    const { email, password } = await req.json();
    const user = findUser({ email });
    if (!user || !validatePassword(user, password.toString())) {
      return NextResponse.json({ message: 'Invalid email or password', status: false });
    }

    const token = generateToken(user);
    const response = NextResponse.json({ message: 'Login successful', status: true });
    response.cookies.set('ttll', token, { httpOnly: true, path: '/' });
    
    return response;
  }