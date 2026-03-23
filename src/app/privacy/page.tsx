import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung / Privacy Policy — openUC2",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-bold mb-1">Datenschutzerkl&auml;rung</h1>
        <p className="text-sm text-uc2-muted mb-10">
          Privacy Policy &middot; Stand / Last updated: March 2026
        </p>

        <div className="space-y-10 text-uc2-text text-sm leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">1. Verantwortlicher / Controller</h2>
            <p>
              openUC2 GmbH
              <br />
              Hans-Kn&ouml;ll-Stra&szlig;e 6
              <br />
              07745 Jena, Deutschland
            </p>
            <p className="mt-2">
              Gesch&auml;ftsf&uuml;hrer / CEO: Dr.&nbsp;Benedict Diederich
              <br />
              E-Mail:{" "}
              <a href="mailto:hello@openuc2.com" className="text-uc2-blue hover:underline">
                hello@openuc2.com
              </a>
              <br />
              Telefon: +49&nbsp;159&nbsp;0199&nbsp;9271
            </p>
            <p className="mt-3">
              The controller within the meaning of Article&nbsp;4(7) GDPR
              responsible for the processing of personal data on this website is
              the company listed above.
            </p>
            <div className="mt-4 bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              <strong>Note:</strong> As of our last review, openUC2 GmbH is not
              legally required to appoint a Data Protection Officer under
              &sect;&nbsp;38 BDSG (fewer than 20 employees regularly processing
              personal data). If this changes, we will update this section and
              publish the DPO&rsquo;s contact details here.
            </div>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              2. Overview of data processing
            </h2>
            <p>
              When you visit our websites (openuc2.com, shop.openuc2.com,
              docs.openuc2.com), we process personal data only to the extent
              necessary for the provision of a functional website, our content and
              services, and to fulfill contractual obligations. We process personal
              data only with the user&rsquo;s consent or where a legal basis permits
              it.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              3. Your rights (Art.&nbsp;15&ndash;21 GDPR)
            </h2>
            <p className="mb-3">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li>
                <strong>Right of access (Art.&nbsp;15):</strong> You may request
                information about what personal data we store about you.
              </li>
              <li>
                <strong>Right to rectification (Art.&nbsp;16):</strong> You may
                request correction of inaccurate data.
              </li>
              <li>
                <strong>Right to erasure (Art.&nbsp;17):</strong> You may request
                deletion of your data, subject to legal retention obligations.
              </li>
              <li>
                <strong>Right to restriction (Art.&nbsp;18):</strong> You may request
                restriction of processing under certain conditions.
              </li>
              <li>
                <strong>Right to data portability (Art.&nbsp;20):</strong> You may
                request your data in a structured, machine-readable format.
              </li>
            </ul>
            <div className="mt-4 bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <strong>Right to object (Art.&nbsp;21 GDPR):</strong> Where we process
              your data on the basis of legitimate interest (Art.&nbsp;6(1)(f)
              GDPR), you have the right to object at any time for reasons arising
              from your particular situation. We will then cease processing your data
              unless we can demonstrate compelling legitimate grounds that override
              your interests. To exercise this right, send an informal email to{" "}
              <a href="mailto:hello@openuc2.com" className="text-uc2-blue hover:underline">
                hello@openuc2.com
              </a>
              .
            </div>
            <p className="mt-4">
              <strong>Right to lodge a complaint:</strong> You have the right to
              lodge a complaint with a supervisory authority. The competent authority
              for Thuringia is:
            </p>
            <p className="mt-1 text-xs text-uc2-muted">
              Th&uuml;ringer Landesbeauftragter f&uuml;r den Datenschutz und die
              Informationsfreiheit (TLfDI)
              <br />
              H&auml;&szlig;lerstra&szlig;e 8, 99096 Erfurt
              <br />
              <a
                href="https://www.tlfdi.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uc2-blue hover:underline"
              >
                www.tlfdi.de
              </a>
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">4. Hosting</h2>
            <p>
              This website is hosted by <strong>Amazon Web Services EMEA SARL</strong>{" "}
              (AWS). The server location is in the EU (Frankfurt am Main, Germany).
              When you access our website, your browser transmits the following data,
              which is stored in server log files:
            </p>
            <p className="mt-2 text-xs text-uc2-muted">
              IP address, date and time of access, browser type and version,
              operating system, referrer URL, requested page.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art.&nbsp;6(1)(f) GDPR (legitimate
              interest in stable and secure website operation).
              <br />
              <strong>Retention:</strong> Log files are deleted after 30 days.
              <br />
              <strong>Data processing agreement (DPA):</strong> We have concluded a
              DPA with AWS in accordance with Art.&nbsp;28 GDPR.
            </p>
          </div>

          {/* 5 */}
          <div id="cookies">
            <h2 className="text-lg font-semibold mb-2">
              5. Cookies and consent
            </h2>
            <p>
              We use cookies on our website. Essential cookies are required for the
              website to function and are set without consent (Art.&nbsp;6(1)(f)
              GDPR). All non-essential cookies (analytics, marketing) are only set
              after you give your explicit consent via our cookie consent banner
              (Art.&nbsp;6(1)(a) GDPR / &sect;&nbsp;25 TDDDG).
            </p>
            <p className="mt-3">
              You can revoke your consent at any time by clicking the cookie settings
              link in the footer of any page, or by deleting cookies in your browser
              settings.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 font-semibold">Cookie</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 pr-4 font-semibold">Retention</th>
                    <th className="text-left py-2 font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="text-uc2-muted">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">uc2_cookie_consent</td>
                    <td className="py-2 pr-4">Stores your cookie preference</td>
                    <td className="py-2 pr-4">1 year</td>
                    <td className="py-2">Essential</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">_ga, _gid</td>
                    <td className="py-2 pr-4">Google Analytics (only with consent)</td>
                    <td className="py-2 pr-4">2 years / 24h</td>
                    <td className="py-2">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">6. Google Analytics</h2>
            <p>
              With your consent, we use Google Analytics 4 (by Google Ireland
              Limited) to analyze website usage. Google Analytics uses cookies and
              transmits usage data to Google servers. We have enabled{" "}
              <strong>IP anonymization</strong> so that your IP address is truncated
              within the EU before transmission.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art.&nbsp;6(1)(a) GDPR (your consent via
              cookie banner).
              <br />
              <strong>Data transfer:</strong> Google LLC (USA) is certified under the
              EU-US Data Privacy Framework.
              <br />
              <strong>Retention:</strong> 14 months.
              <br />
              <strong>Opt-out:</strong> You can opt out by declining analytics cookies
              in our consent banner, or by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uc2-blue hover:underline"
              >
                Google Analytics opt-out browser add-on
              </a>
              .
            </p>
          </div>

          {/* 7 */}
          <div id="contact-forms">
            <h2 className="text-lg font-semibold mb-2">
              7. Contact forms and email
            </h2>
            <p>
              When you contact us via a form on our website or by email, the data you
              provide (name, email, message, and optionally company and salutation) is
              processed to handle your inquiry.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art.&nbsp;6(1)(b) GDPR (pre-contractual
              measures) or Art.&nbsp;6(1)(f) GDPR (legitimate interest in answering
              inquiries).
              <br />
              <strong>Retention:</strong> We store contact form data for 12 months
              after your last interaction, unless a contractual relationship requires
              longer retention. You may request deletion at any time.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              8. Online shop (shop.openuc2.com)
            </h2>
            <p>
              Our online shop is operated on the <strong>Odoo</strong> platform (Odoo
              S.A., Belgium). When you make a purchase, we collect and process the
              following data: name, billing and shipping address, email address, phone
              number, and payment information.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art.&nbsp;6(1)(b) GDPR (contract
              fulfillment).
              <br />
              <strong>Payment processing:</strong> Payment data is processed by our
              payment service provider(s) and is not stored on our servers.
              <br />
              <strong>Retention:</strong> Order data is retained for the statutory
              retention period of 10 years (&sect;&nbsp;147 AO, &sect;&nbsp;257 HGB)
              after which it is deleted.
              <br />
              <strong>Odoo DPA:</strong> We have concluded a data processing agreement
              with Odoo S.A.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">9. Newsletter</h2>
            <p>
              If you subscribe to our newsletter, we process your email address to
              send periodic updates about our products, events, and community. We use
              a double opt-in procedure: after signing up, you receive a confirmation
              email that you must click to activate your subscription.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art.&nbsp;6(1)(a) GDPR (your consent).
              <br />
              <strong>Unsubscribe:</strong> You can unsubscribe at any time via the
              link in every newsletter email, or by emailing us.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">10. YouTube embeds</h2>
            <p>
              We embed videos from YouTube (Google Ireland Limited) using the{" "}
              <strong>privacy-enhanced mode</strong> (youtube-nocookie.com). In this
              mode, YouTube does not set cookies until you click to play the video.
            </p>
            <p className="mt-2">
              <strong>Legal basis:</strong> Art.&nbsp;6(1)(f) GDPR (legitimate
              interest in presenting multimedia content). When you click play,
              Art.&nbsp;6(1)(a) GDPR (consent) applies.
              <br />
              <strong>Data transfer:</strong> Google LLC (USA)&nbsp;&mdash; certified
              under the EU-US Data Privacy Framework.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              11. Third-party services and data transfers
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 pr-4 font-semibold">Service</th>
                    <th className="text-left py-2 pr-4 font-semibold">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Safeguard</th>
                  </tr>
                </thead>
                <tbody className="text-uc2-muted">
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">AWS (Hosting)</td>
                    <td className="py-2 pr-4">Amazon Web Services EMEA SARL</td>
                    <td className="py-2 pr-4">Website hosting (EU-Frankfurt)</td>
                    <td className="py-2">EU servers, DPA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Odoo (Shop)</td>
                    <td className="py-2 pr-4">Odoo S.A., Belgium</td>
                    <td className="py-2 pr-4">E-commerce platform</td>
                    <td className="py-2">EU company, DPA</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Google Analytics</td>
                    <td className="py-2 pr-4">Google Ireland Ltd.</td>
                    <td className="py-2 pr-4">Website analytics</td>
                    <td className="py-2">EU-US DPF, consent</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">YouTube</td>
                    <td className="py-2 pr-4">Google Ireland Ltd.</td>
                    <td className="py-2 pr-4">Video embeds</td>
                    <td className="py-2">EU-US DPF, privacy mode</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 pr-4">Discourse</td>
                    <td className="py-2 pr-4">Discourse.org (US)</td>
                    <td className="py-2 pr-4">Community forum</td>
                    <td className="py-2">SCCs</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">GitHub</td>
                    <td className="py-2 pr-4">GitHub/Microsoft (US)</td>
                    <td className="py-2 pr-4">Open-source repos</td>
                    <td className="py-2">EU-US DPF</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              12. SSL/TLS encryption
            </h2>
            <p>
              All our websites use SSL/TLS encryption (HTTPS) for the secure
              transmission of data.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">
              13. Changes to this policy
            </h2>
            <p>
              We may update this privacy policy to reflect changes in our data
              processing practices or legal requirements. The current version is
              always available at this URL. Last updated: March 2026.
            </p>
          </div>

          <div className="bg-uc2-surface border border-white/10 rounded-lg p-5 text-xs text-uc2-muted">
            <strong>Template notice:</strong> This privacy policy is a draft
            template. It should be reviewed and finalized by a qualified data
            protection attorney (Datenschutzanwalt) before publication.
          </div>
        </div>
      </div>
    </section>
  );
}
