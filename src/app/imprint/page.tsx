import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Impressum / Legal Notice — openUC2",
};

export default function ImprintPage() {
  return (
    <section className="pt-28 pb-16 bg-white">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Impressum / Legal Notice</h1>

        <div className="space-y-8 text-uc2-text text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold mb-2">
              Angaben gem&auml;&szlig; &sect;&nbsp;5 DDG
            </h2>
            <p>
              <strong>openUC2 GmbH</strong>
              <br />
              vertreten durch den Gesch&auml;ftsf&uuml;hrer Dr.&nbsp;Benedict
              Diederich
              <br />
              <br />
              Hans-Kn&ouml;ll-Stra&szlig;e 6<br />
              07745 Jena
              <br />
              Deutschland / Germany
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Kontakt / Contact</h2>
            <p>
              Telefon: +49&nbsp;159&nbsp;0199&nbsp;9271
              <br />
              E-Mail:{" "}
              <a href="mailto:hello@openuc2.com" className="text-uc2-blue hover:underline">
                hello@openuc2.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Handelsregister / Commercial Register
            </h2>
            <p>Amtsgericht Jena, HRB 519914</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Umsatzsteuer-Identifikationsnummer / VAT&nbsp;ID
            </h2>
            <p>DE356415686</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Steuernummer / Tax Number
            </h2>
            <p>162/115/03371</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Verantwortlich f&uuml;r den Inhalt nach &sect;&nbsp;18 Abs.&nbsp;2
              MStV
            </h2>
            <p>
              Dr.&nbsp;Benedict Diederich
              <br />
              Hans-Kn&ouml;ll-Stra&szlig;e 6, 07745 Jena
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              Streitbeilegung / Dispute Resolution
            </h2>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uc2-blue hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p className="mt-1 text-uc2-muted italic">
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
