"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    phoneOptIn: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    setFormData((prev) => ({ ...prev, [name]: newValue }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", phone: "", email: "", message: "", phoneOptIn: false })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone #"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />

              <textarea
                name="message"
                placeholder="Tell us anything that you would like us to help you with!"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md h-32 resize-none"
                required
              />

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="phoneOptIn"
                  checked={formData.phoneOptIn}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#00a0e3] focus:ring-[#00a0e3]"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I consent to receive text messages related to my order status and inquiries. Message and data rates may apply. You can opt out at any time by replying STOP.
                </span>
              </label>

              <Button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-3">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
