"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-TMP2J62W3Q"; // Replace with real GA4 ID
const HOTJAR_ID = "0000000"; // Replace with real Hotjar ID

export function AnalyticsProvider() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("uc2_cookie_consent");
    setConsent(stored === "all");

    const handler = () => {
      const updated = localStorage.getItem("uc2_cookie_consent");
      if (updated === "all") {
        setConsent(true);
      } else {
        // Consent revoked — reload page to fully remove analytics scripts
        setConsent(false);
        window.location.reload();
      }
    };
    window.addEventListener("storage", handler);
    window.addEventListener("uc2_consent", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("uc2_consent", handler);
    };
  }, []);

  if (!consent) return null;

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>

      {/* Hotjar */}
      <Script id="hotjar-init" strategy="afterInteractive">
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    </>
  );
}
