import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { name, email, password, phone } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'name, email and password are required' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        phone,
      },
    }); 

    const { password: _p, ...safeUser } = user as any;
    return NextResponse.json(safeUser, { status: 201 });
  } catch (err) {
    console.error('Signup error:', err);
    if (process.env.NODE_ENV !== 'production') {
      // return detailed error in dev to help debugging
      return NextResponse.json({ error: String((err as any)?.message || 'Internal server error') }, { status: 500 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}