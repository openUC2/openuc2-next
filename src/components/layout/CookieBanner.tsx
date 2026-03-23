"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("uc2_cookie_consent");
    if (!consent) {
      setVisible(true);
    } else {
      setHasConsent(true);
    }
  }, []);

  function accept(level: "essential" | "all") {
    localStorage.setItem("uc2_cookie_consent", level);
    localStorage.setItem("uc2_cookie_date", new Date().toISOString());
    setVisible(false);
    setHasConsent(true);
    window.dispatchEvent(new Event("uc2_consent"));
  }

  function revokeConsent() {
    localStorage.removeItem("uc2_cookie_consent");
    localStorage.removeItem("uc2_cookie_date");
    setHasConsent(false);
    setVisible(true);
    // Notify AnalyticsProvider to unload (page reload is cleanest)
    window.dispatchEvent(new Event("uc2_consent"));
  }

  return (
    <>
      {/* Cookie settings button — visible after consent to allow changes */}
      {hasConsent && !visible && (
        <button
          onClick={revokeConsent}
          className="fixed bottom-4 left-4 z-[9998] px-3 py-1.5 text-xs bg-white border border-uc2-border text-uc2-muted rounded-full shadow-sm hover:text-uc2-text hover:shadow-md transition-all"
          aria-label="Cookie settings"
        >
          Cookie settings
        </button>
      )}

      {/* Banner */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-uc2-border shadow-lg px-6 py-4">
          <div className="max-w-[1140px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-uc2-muted">
              We use cookies to ensure the basic functionality of this website and to improve your
              experience. For details, see our{" "}
              <Link href="/privacy#cookies" className="text-uc2-blue hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => accept("essential")}
                className="px-5 py-2 text-sm font-semibold border border-uc2-border text-uc2-text rounded-lg hover:bg-uc2-light transition-colors"
              >
                Only essential
              </button>
              <button
                onClick={() => accept("all")}
                className="px-5 py-2 text-sm font-semibold bg-uc2-green text-white rounded-lg hover:brightness-110 transition-all"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
