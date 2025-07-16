"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  onContactClick: () => void
}

export function MobileMenu({ onContactClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleContactClick = () => {
    setIsOpen(false)
    onContactClick()
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-lime-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="SimplePills Logo" width={40} height={40} />
              <span className="font-semibold">Simple Health Solutions</span>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-lime-600 focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="#services"
              className="py-2 text-gray-800 hover:text-lime-600 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Our Services
            </Link>
            <Link
              href="#team"
              className="py-2 text-gray-800 hover:text-lime-600 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Our Team
            </Link>
            <Link
              href="#outcomes"
              className="py-2 text-gray-800 hover:text-lime-600 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              Client Outcomes
            </Link>
            <Link
              href="#faq"
              className="py-2 text-gray-800 hover:text-lime-600 border-b border-gray-100"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
            <Button className="bg-lime-500 hover:bg-lime-600 text-black w-full mt-4" onClick={handleContactClick}>
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
