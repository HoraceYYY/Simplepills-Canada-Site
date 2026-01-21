import Link from "next/link"
import Image from "next/image"

export default function TermsOfUse() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 flex items-center justify-between py-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="SimplePills Logo" width={50} height={50} />
          <span className="font-semibold">SimplePills</span>
        </Link>
        <Link href="/" className="text-sm text-lime-600 hover:text-lime-700">
          Back to Home
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-[900px] mx-auto w-full px-4 sm:px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              The Site (excluding linked sites, if any) is administered and controlled by Simple-Pills.com, and its affiliates, subsidiaries, officers, directors, employees or agents (collectively, "Simple-Pills.com") in accordance with the laws of the State of Delaware and the laws of the United States applicable therein. You agree that the Site will be governed by and construed in accordance with Delaware law without giving effect to any principles of conflicts of laws. You agree that all disputes, controversies or claims arising out of or in connection with the Site shall be submitted to and be subject to the jurisdiction of the courts of the State of Delaware, United States. You submit and attorn to the exclusive jurisdiction of the courts of the State of Delaware to finally adjudicate or determine any suit, action or proceeding arising out of or in connection with the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. General</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All products and services of Simple-Pills.com are subject to the terms and conditions of the applicable agreements governing their use or sale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms are to be read by you together with any terms, conditions or disclaimers provided in the pages of the Site. In the event of any conflict, the terms provided in the pages of the Site will govern.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The information, material and content provided in the Site (the "Information") may be changed at any time without notice. Changes may be made to these Terms at any time without notice by updating this posting. You agree to review these Terms regularly and your continued access or use of the Site will mean that you agree to any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Local Laws; Export Control</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is important to note that not all of the products, services and Information are available in all states or in jurisdictions outside the United States. The Information does not constitute an offer or solicitation to buy or sell any product, service or information to anyone in any jurisdiction in which an offer or solicitation is not authorized or cannot legally be made or to any person to whom it is unlawful to make an offer or solicitation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The terms and conditions applicable to any product, service or information will be those determined at the time of provision of the product, service or information. Please be aware of the laws of your jurisdiction or that otherwise apply to you in relation to any of the matters described in these pages. If you choose to access the Site from outside of the State of Delaware or the United States, you do so on your own initiative and are responsible for compliance with applicable local, national or international laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Not Offering Any Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Information is for informational purposes only and is not intended to provide specific advice for you, and should not be relied upon in that regard. You should not act or rely on the Information without seeking the advice of a professional.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              YOU SHOULD NOT USE THE INFORMATION CONTAINED ON THIS SITE FOR DIAGNOSING, TREATING, CURING OR PREVENTING A HEALTH PROBLEM OR PRESCRIBING A MEDICATION. YOU SHOULD CAREFULLY READ ALL INFORMATION PROVIDED BY THE MANUFACTURERS OF THE PRODUCT ON OR IN THE PRODUCT PACKAGING AND LABELS BEFORE USING ANY PRODUCT. ALWAYS CONSULT YOUR OWN PHYSICIAN FOR ADVICE AND TREATMENT.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Disclaimers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              SIMPLE-PILLS.COM PROVIDES THE SITE AND THE INFORMATION ON AN "AS IS, WHERE IS AND AS AVAILABLE" BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, SIMPLE-PILLS.COM DOES NOT MAKE ANY EXPRESS OR IMPLIED WARRANTIES, REPRESENTATIONS, ENDORSEMENTS OR CONDITIONS WITH RESPECT TO THE SITE OR THE INFORMATION, INCLUDING WITHOUT LIMITATION, WARRANTIES AS TO MERCHANTABILITY, OPERATION, NON-INFRINGEMENT, USEFULNESS, COMPLETENESS, ACCURACY, CURRENTNESS, RELIABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              FURTHER, SIMPLE-PILLS.COM DOES NOT REPRESENT OR WARRANT THAT THE SITE WILL BE AVAILABLE OR MEET YOUR REQUIREMENTS, THAT ACCESS WILL BE UNINTERRUPTED, THAT THERE WILL BE NO DELAYS, FAILURES, ERRORS OR OMISSIONS OR LOSS OF TRANSMITTED INFORMATION, THAT NO VIRUSES OR OTHER CONTAMINATING OR DESTRUCTIVE PROPERTIES WILL BE TRANSMITTED, OR THAT NO DAMAGE WILL OCCUR TO YOUR COMPUTER SYSTEM.
            </p>
            <p className="text-gray-700 leading-relaxed">
              EXCEPT WHERE PROHIBITED BY LAW, UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL SIMPLE-PILLS.COM BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL OTHER DAMAGES, INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA OR PROFIT, ARISING OUT OF THE USE, OR THE INABILITY TO USE, THE SITE OR THE INFORMATION, EVEN IF SIMPLE-PILLS.COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Internet E-Mail</h2>
            <p className="text-gray-700 leading-relaxed">
              Any unprotected E-Mail communication over the Internet is, as with communication via any other medium (e.g. cellular phones, post office mail), not confidential, subject to possible interception or loss, and is also subject to possible alteration. Simple-Pills.com is not responsible for and will not be liable to you or anyone else for any damages in connection with an E-Mail sent by you to Simple-Pills.com or an E-Mail sent by Simple-Pills.com to you at your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. No Endorsements</h2>
            <p className="text-gray-700 leading-relaxed">
              No endorsement or approval of any third parties or their advice, opinions, information, products or services is expressed or implied by any Information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Links/Software</h2>
            <p className="text-gray-700 leading-relaxed">
              Links from or to websites outside the Site are meant for convenience only. Simple-Pills.com does not review, endorse, approve or control, and is not responsible for any sites linked from or to the Site, the content of those sites, the third parties named therein, or their products and services. Linking to any other site is at your sole risk and Simple-Pills.com will not be responsible or liable for any damages in connection with linking. Links to downloadable software sites are for convenience only and Simple-Pills.com is not responsible or liable for any difficulties or consequences associated with downloading the software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Your Transmissions</h2>
            <p className="text-gray-700 leading-relaxed">
              Any material, information or idea you transmit to or post on this Site by any means will be treated as non-proprietary, and may be used by Simple-Pills.com for any purpose whatsoever, including, but not limited to, developing, manufacturing and marketing products and services. You are prohibited from posting or transmitting to or from this Site any unlawful, threatening, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material, or any other material that could give rise to any civil or criminal liability under the law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              By using this Site, you consent to the collection and use of personal information as described in our <Link href="/privacy" className="text-lime-600 hover:text-lime-700 underline">Privacy Policy</Link> published on the Site. Simple-Pills.com reserves the right to amend its privacy policy from time to time by posting the updated policy on the Site. You agree to review the privacy policy each time you visit the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Digital Millennium Copyright Act</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Simple-Pills.com reserves the right to remove any content or any other material or information available on or through the Site, at any time, for any reason. Simple-Pills.com otherwise complies with the provisions of the Digital Millennium Copyright Act ("DMCA") applicable to Internet service providers (17 U.S.C. § 512, as amended), and responds to clear notices of alleged copyright infringement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you have objections to copyrighted content or material made available on or through our site, you may submit a notification to our Designated Agent at: support@simple-pills.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and any terms incorporated or referred to herein constitute the entire agreement between you and Simple-Pills.com relating to the subject matter hereof, and supersede any prior understandings or agreements (whether electronic, oral or written) regarding the subject matter, and may not be amended or modified except in writing, or by Simple-Pills.com making such amendments or modifications in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">13. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be deemed severable. In the event that any provision is determined to be unenforceable or invalid, such provision shall nonetheless be enforced to the fullest extent permitted by applicable law, and such determination shall not affect the validity and enforceability of any other remaining provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">14. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about these Terms of Use, please contact us by email at: support@simple-pills.com.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="SimplePills Logo" width={40} height={40} />
              <span className="text-xs">© 2025 SimplePills Inc. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
