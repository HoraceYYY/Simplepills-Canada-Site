"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    phoneOptIn: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", phone: "", email: "", message: "", phoneOptIn: false })
    setIsSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="SimplePills Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-semibold text-[#00a0e3]">SimplePills</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-[#00a0e3] transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions about your health benefits? We&apos;re here to help.
            </p>
          </div>

          {/* SMS Info Card */}
          <div className="bg-[#e6f7fc] rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#00a0e3] rounded-full p-3 flex-shrink-0">
                <MessageSquare className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">SMS Order Updates</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We use SMS to send transactional messages regarding your orders, including order status updates, 
                  shipping confirmations, and tracking information. By providing your phone number and opting in, 
                  you authorize us to contact you regarding your order. We do not send marketing or promotional messages.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-6">
                  We&apos;ve received your message and will get back to you soon.
                  {formData.phoneOptIn && (
                    <span className="block mt-2">
                      You&apos;ve opted in to receive SMS updates about your orders.
                    </span>
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="bg-transparent border-gray-300"
                  >
                    Submit Another Message
                  </Button>
                  <Link href="/">
                    <Button className="bg-[#00a0e3] hover:bg-[#0090cc] text-white w-full sm:w-auto">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent outline-none transition"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us anything that you would like us to help you with!"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#00a0e3] focus:border-transparent outline-none transition"
                      required
                    />
                  </div>

                  {/* SMS Opt-in Section */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-3">SMS Communications</h3>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="phoneOptIn"
                        checked={formData.phoneOptIn}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 rounded border-gray-300 text-[#00a0e3] focus:ring-[#00a0e3]"
                      />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        I consent to receive text messages related to my order status and inquiries. 
                        Message and data rates may apply. You can opt out at any time by replying STOP.
                        <span className="block mt-2 text-xs text-gray-500">
                          We only send transactional messages about your orders - no marketing or promotional content.
                        </span>
                      </span>
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00a0e3] hover:bg-[#0090cc] text-white font-medium py-3 text-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By submitting this form, you agree to our{" "}
              <Link href="/terms" className="text-[#00a0e3] hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#00a0e3] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SimplePills. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
