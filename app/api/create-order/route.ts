// app/api/create-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Generate receipt ID (max 40 chars for Razorpay)
function generateReceipt(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `rcpt_${timestamp}_${random}`.substring(0, 40);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = "INR", notes } = body;

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: generateReceipt(),
      notes: notes || {},
    };

    const order = await razorpay.orders.create(options);
    
    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: any) {
    console.error('Razorpay Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.error?.description || 'Failed to create order'
      },
      { status: 500 }
    );
  }
}