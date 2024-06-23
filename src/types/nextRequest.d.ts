import { NextRequest } from 'next/server';

declare module 'next/server' {
  interface NextRequest {
    user?: any; // You can replace `any` with a more specific type if you know what it should be
  }
}