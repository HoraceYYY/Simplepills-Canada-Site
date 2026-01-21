import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              Privacy is important to Simple-Pills.com. The following describes the information we collect and the ways we use that information. By using www.simple-pills.com (the "Website") and engaging with our services (collectively, the "Services"), you are consenting to the collection, use, sharing, and storage of your personal information, as described below. This Privacy Policy supplements and is incorporated into our <Link href="/terms" className="text-lime-600 hover:text-lime-700 underline">Terms of Use</Link> which, together with this Privacy Policy, govern your use of the Services. We have endeavored to make this Privacy Policy as clear as possible. If, however, you have any questions, comments or concerns about this Privacy Policy, please send us an email at support@simple-pills.com.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The terms "Simple-Pills.com" or "us" or "we" or "our" refer to Simple-Pills.com Inc., the owner of the Services. The terms "you" or "your" refer to the user or viewer of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information from those who visit and interact with our Services. For users of the Services, this information may include the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Full name, login credentials, email address, physical address, and phone number;</li>
              <li>Health benefit plan documents and related information you provide for analysis;</li>
              <li>Credit card and payment information; and</li>
              <li>Interests, comments, requests, and other information you may offer.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may also automatically collect other information as you interact with the Services. We may collect and maintain device, browser, and operating system information, your Internet Protocol ("IP") address, Services visits, page response times, download errors, length of visits to certain pages, and page interaction information (such as swipes, share lists, and recommendations). We also may automatically collect information from cookies that are placed throughout the Services. Generally, this information is collected in aggregate form, which means we cannot personally identify you through these mechanisms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use the Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed">
              We use this information to facilitate the provision of your requested services, such as generating health benefit analysis reports and providing personalized recommendations. We also use this information to track user behavior, improve our products and services, communicate with you regarding the Services, and generate statistics and trend data for internal and external business purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not share your information for commercial purposes. In addition, we may share your information in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                <strong>With service providers:</strong> We may share your information with third parties that perform tasks on our behalf and that help us better provide our Services to you.
              </li>
              <li>
                <strong>To protect us, our users, or to law enforcement officials:</strong> We may share your information to comply with legal processes (including to comply with the law, to enforce our Terms of Use, or to respond to subpoenas, discovery requests, or similar legal processes or proceedings), cooperate with law enforcement or when we believe it is prudent to share information with legal authorities, and investigate and prevent fraud or imminent harm to you, our users, or to us.
              </li>
              <li>
                <strong>In the event of a business transfer:</strong> We may share your information with another entity as a result of a corporate sale, merger, consolidation, asset sale, or in the unlikely event of bankruptcy or we go out of business.
              </li>
              <li>
                <strong>With your consent:</strong> We may also share your information in other circumstances when we have obtained your consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Consent to Data Processing in the United States</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you are a resident of the United States, the European Economic Area, or any other global jurisdiction, we may send and store your personal information outside of the country in which you reside. We currently store your data in the United States. By using our Services and consenting to this Privacy Policy, you agree and hereby consent to the storage and processing of your Personal Data in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Third Parties</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be held by third parties or we may link to other sites or applications not affiliated, owned, or controlled by us. When you click on a link or an advertisement, you will be directed to that third party's website. The fact that we link to a third party's website or advertisement does not in any way create a relationship between us and that third party. We do not endorse or represent any third parties. The privacy practices of any third parties are outside the scope of this Privacy Policy and their use or disclosure of your information (including your personal information) will be governed by their own privacy practices or policies. We encourage you to review the privacy practices or policies of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              If you would like to access, modify, or delete your personal information, you may submit a request to support@simple-pills.com. For more information or to see if these rights apply to you, please contact us. We will promptly review all such requests in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Security</h2>
            <p className="text-gray-700 leading-relaxed">
              The security of your information is important to us. We maintain various safeguards in order to keep your personal information safe. We always strive to do our best to protect your information, but we cannot guarantee that your information will always be secure. However, you can play your part in ensuring your information remains secure. You should never disclose your login credentials or personal information with anyone else, and you should keep such information in a safe and confidential manner. You should also adopt passwords that are hard to decipher and be sure to log out of your account whenever it is not being used by you. We will notify you, by email or through the Services, if we believe your information has been breached. Please note that you transmit your personal information at your own risk and that we are not responsible for any deliberate or accidental circumvention of our privacy and security measures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Children's Online Privacy Protection Act</h2>
            <p className="text-gray-700 leading-relaxed">
              The Services are intended for general audiences and is not directed to children under 13 years old. We do not target this Services to children under 13, and we do not intentionally collect any information from users under 13. If you become aware that your child has used the Services, and we may have personal information about a user under 13, please contact us at support@simple-pills.com, so we may delete the information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small bits of electronic information that a website or application sends to your browser and are stored on your hard drive. We use cookies to identify users, track your behavior on the Website, keep the Services secure, and improve the Services' performance. Some cookies are necessary in order to use the Services, and these cannot be disabled. Other cookies are not required to browse our Services and may be disabled or deleted, but this may prevent you from properly using the Services. Most browsers allow you to adjust your cookie settings, which can be done through your browser's settings. Third-party services may employ cookies on the Services in order to better perform their services. We have no control over third-party cookies, and therefore, disclaim any and all liability related to third-party cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Changes and Updates to Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy may be revised periodically, and this will be reflected by the date above. Please revisit this page to stay aware of any changes. Your continued use of the Services constitutes your agreement to this Privacy Policy and any future revisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us by email at the following address: support@simple-pills.com.
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
