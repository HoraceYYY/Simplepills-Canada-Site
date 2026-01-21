"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ReportCard } from "@/components/report-card"
import { HeroCarousel } from "@/components/hero-carousel"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)

  const openContactForm = () => setIsContactFormOpen(true)
  const closeContactForm = () => setIsContactFormOpen(false)

  const downloadSampleReport = () => {
    // Create a link to the PDF file and trigger a download
    const link = document.createElement("a")
    link.href = "/sample-report.pdf"
    link.download = "SimplePills-Sample-Report.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="SimplePills Logo" width={50} height={50} />
          <span className="font-semibold">SimplePills</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#services" className="text-sm hover:text-lime-600">
            Our Services
          </Link>
          <Link href="#team" className="text-sm hover:text-lime-600">
            Our Team
          </Link>
          <Link href="#outcomes" className="text-sm hover:text-lime-600">
            Client Outcomes
          </Link>
          <Link href="#faq" className="text-sm hover:text-lime-600">
            FAQ
          </Link>
          <Button className="bg-lime-500 hover:bg-lime-600 text-black" onClick={openContactForm}>
            Contact Us
          </Button>
        </nav>
        <MobileMenu onContactClick={openContactForm} />
      </header>

      {/* Hero Section with Carousel - Full Width */}
      <section className="relative w-full">
        <HeroCarousel images={["/images/slide-1.png", "/images/slide-2.png", "/images/slide-3.png"]} />
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="bg-white/80 p-10 rounded-md max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">Simply, Healthcare Explained</h1>
            <p className="text-center mb-2">No more artificially complex health benefit.</p>
            <p>We help you to understand and navigate your health benefit.</p>
          </div>
        </div>
      </section>

      {/* Reports Section - Max Width 1200px */}
      <section id="services" className="bg-lime-50 py-12 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6">
          <h2 className="text-center mb-8">
            Our Reports Focus <span className="text-orange-500 font-semibold">Only On Your Needs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ReportCard number={1} title="Health Benefit Plan Analysis" iconSrc="/images/icon-health-analysis.png" />
            <ReportCard
              number={2}
              title="Personalized Health Coverage Recommendations"
              iconSrc="/images/icon-health-coverage.png"
            />
            <ReportCard
              number={3}
              title="Healthcare Cost Comparison Analysis"
              iconSrc="/images/icon-cost-comparison.png"
            />
            <ReportCard
              number={4}
              title="Digital Reporting & Guidance Platform"
              iconSrc="/images/icon-digital-reporting.png"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={downloadSampleReport}>
              Read Our Sample Report
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section - Max Width 1200px */}
      <section id="team" className="py-16 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/pharmacist.png"
                alt="Healthcare professional"
                width={500}
                height={400}
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                We build our report with the <span className="text-orange-500">highest standard</span>
              </h2>
              <p className="mb-4">
                Our team is composed of healthcare experts from some of the most prestigious international consulting
                firms.
              </p>
              <p>
                We uphold the highest standards to ensure that our customer receive the same level of care and insight
                typically reserved for large corporations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Section - Max Width 1200px */}
      <section id="outcomes" className="bg-lime-50 py-16 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                ...and we help you to make healthcare <span className="text-orange-500">affordable</span>
              </h2>
              <p>
                Our reports provide you with clear insights into healthcare and medication, while receiving personalized
                support that improves healthcare access and adherence for individuals and employees.
              </p>
            </div>
            <div>
              <Image
                src="/images/fill-med.png"
                alt="Medication management"
                width={500}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Max Width 1200px */}
      <section id="faq" className="py-16 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-center mb-8">Check Out Our FAQs</h2>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">What does Simple Health Solutions do?</AccordionTrigger>
              <AccordionContent>
                We are a digital platform that analyzes documents provided by you (such as health benefit summaries) and
                generates customized reports to help you better understand your existing coverage. We do not sell
                insurance or generate commissions, so our advice is completely unbiased.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Who do you work with?</AccordionTrigger>
              <AccordionContent>
                Our primary clients are individuals, families, and small businesses who want to make more informed
                decisions about their existing healthcare benefit plans. We provide clear, personalized summaries that
                are easy to understand and use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How long does it take to get my report?</AccordionTrigger>
              <AccordionContent>
                Most reports are generated and ready to review within one hour of submitting your documents. We'll
                notify you when your analysis is complete.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What types of documents can I upload?</AccordionTrigger>
              <AccordionContent>
                You can upload health insurance plan summaries, employer benefit booklets, or any documents that outline
                your coverage. The more information you provide about your current documents, the more accurate and
                helpful your report will be.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">How do you charge for your platform?</AccordionTrigger>
              <AccordionContent>
                We offer usage-based pricing tailored to your needs. You only pay based on the amount of the document
                you would like us to process. After you upload your documents, our platform will provide an estimate
                which you can approve before your analysis is complete.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Do you provide medical or legal advice?</AccordionTrigger>
              <AccordionContent>
                No. We do not provide medical, legal, or financial advice. Our platform offers informational reports to
                help you better understand your existing benefit documents. For medical or legal questions, we recommend
                consulting a licensed professional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">Do you sell or recommend insurance plans?</AccordionTrigger>
              <AccordionContent>
                No. We do not sell, broker, or endorse any insurance plans. Our reports are generated solely based on
                the materials you upload, and any suggestions we provide are meant to help you better understand what's
                already included in your coverage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">Can I use this service if I'm outside the U.S.?</AccordionTrigger>
              <AccordionContent>
                Our current AI models and analysis tools have been specifically developed and optimized for U.S.-based
                health benefit documents. As a result, we currently focus only on analyzing coverage within the United
                States. If you're from outside the U.S., the report may be incomplete or not applicable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">How do we get started?</AccordionTrigger>
              <AccordionContent>
                Simply click on "Contact Us" to learn more about our platform and the way we can help.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">Is my data safe?</AccordionTrigger>
              <AccordionContent>
                Yes. We do not collect or store sensitive personal health or financial information. Documents submitted
                to our platform are processed securely and used only to generate your report. We follow strict privacy
                and data handling protocols to protect your information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section - Max Width 1200px */}
      <section className="bg-lime-100 py-8">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 text-center">
          <p className="mb-2">
            More Questions? Fill out the{" "}
            <button onClick={openContactForm} className="text-lime-600 underline">
              contact form
            </button>{" "}
            to get in touch with us!
          </p>
        </div>
      </section>

      {/* Footer - Max Width 1200px */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="text-sm hover:text-lime-600">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-sm hover:text-lime-600">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#outcomes" className="text-sm hover:text-lime-600">
                    Client Outcomes
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm hover:text-lime-600">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hours of Operation</h3>
              <p className="text-sm mb-2">Sales and Customer Service Team:</p>
              <p className="text-sm">9am-5pm EST (M-F)</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal & Compliance</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-sm hover:text-lime-600">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm hover:text-lime-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="SimplePills Logo" width={40} height={40} />
              <span className="text-xs">© 2025 SimplePills Inc. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}
