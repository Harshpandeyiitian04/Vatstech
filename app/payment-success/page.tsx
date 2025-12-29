'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Home, ArrowLeft, Download, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const paymentId = searchParams.get('payment_id')
  const orderId = searchParams.get('order_id')
  const amount = searchParams.get('amount')
  const service = searchParams.get('service')
  const category = searchParams.get('category')

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Success Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
          </div>

          {/* Success Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
            Payment Successful! 🎉
          </h1>

          {/* Success Message */}
          <p className="text-gray-600 mb-6 text-center text-sm sm:text-base">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>

          {/* Payment Details */}
          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold text-right">{service || 'Service'}</span>
              </div>
              {category && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold text-right">{category}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-bold text-green-700 text-right">₹{amount || '0'}</span>
              </div>
              {paymentId && (
                <div className="flex flex-col">
                  <span className="text-gray-600">Payment ID:</span>
                  <span className="text-xs font-mono text-gray-500 truncate">{paymentId}</span>
                </div>
              )}
              {orderId && (
                <div className="flex flex-col">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="text-xs font-mono text-gray-500 truncate">{orderId}</span>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>You'll receive a confirmation email within 5 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Our team will contact you within 24 hours regarding service delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Keep your payment ID handy for any queries</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => window.print()}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Receipt
            </button>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8] hover:text-white px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                More Services
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="w-5 h-5" />
                Home
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3 text-center">Need help with your order?</p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919576894955"
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <a
                href="mailto:info@vatstech.in"
                className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="animate-pulse">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto mb-6"></div>
              <div className="h-12 bg-gray-200 rounded mb-4"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
}