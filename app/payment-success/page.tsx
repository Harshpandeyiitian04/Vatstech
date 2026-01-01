// app/payment-success/page.tsx
'use client'
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle, ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const paymentId = searchParams.get('payment_id');
  const orderId = searchParams.get('order_id');
  const amount = searchParams.get('amount');
  const service = searchParams.get('service');
  const category = searchParams.get('category');

  useEffect(() => {
    // Verify payment on your backend (recommended)
    if (paymentId && orderId) {
      // You should verify payment signature here
      setLoading(false);
    } else {
      router.push('/');
    }
  }, [paymentId, orderId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Verifying payment...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Payment Successful! 🎉
            </h1>
            
            <p className="text-gray-600 mb-8">
              Thank you for your payment. Your order has been confirmed.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-left">
                  <p className="text-gray-500 text-sm">Service</p>
                  <p className="font-semibold">{service}</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-sm">Category</p>
                  <p className="font-semibold">{category}</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-sm">Amount Paid</p>
                  <p className="font-semibold text-green-600">₹{amount}</p>
                </div>
                <div className="text-left">
                  <p className="text-gray-500 text-sm">Payment ID</p>
                  <p className="font-semibold text-sm">{paymentId?.slice(0, 12)}...</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                We have received your payment. Our team will contact you shortly 
                to proceed with the service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Receipt
                </button>
                
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Browse More Services
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 mt-8">
                A confirmation email has been sent to your registered email address.
                For any queries, contact us at{' '}
                <a href="mailto:support@vatstech.com" className="text-blue-600 hover:underline">
                  support@vatstech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading payment details...</div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}