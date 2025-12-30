// app/api/create-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// Helper function to generate short receipt
function generateShortReceipt(serviceName: string = 'service'): string {
  // Remove special characters and limit to 30 chars
  const cleanName = serviceName
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 20)
    .toLowerCase();
  
  const timestamp = Date.now().toString().slice(-6);
  return `rcpt_${cleanName}_${timestamp}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = "INR", receipt, notes } = body;

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      );
    }

    // Generate short receipt if not provided or too long
    const shortReceipt = receipt && receipt.length <= 40 
      ? receipt 
      : generateShortReceipt(notes?.service);

    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: shortReceipt,
      notes: notes || {},
    };

    console.log('Creating order with options:', options);
    
    const order = await razorpay.orders.create(options);
    
    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: any) {
    console.error('Razorpay order creation error details:', {
      message: error.message,
      statusCode: error.statusCode,
      error: error.error
    });
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.error?.description || error.message || 'Failed to create order',
        details: error.error
      },
      { status: error.statusCode || 500 }
    );
  }
}