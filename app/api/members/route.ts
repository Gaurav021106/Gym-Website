/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb'; // adjust to your DB connection helper path
import { MemberModel } from '@/models/Member';

export async function GET() {
  try {
    await connectDB();
    const members = await MemberModel.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ members }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { id, _id, ...memberData } = body; // strip client-generated temp IDs so Mongo generates ObjectId
    const newMember = await MemberModel.create(memberData);
    return NextResponse.json({ member: newMember }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}