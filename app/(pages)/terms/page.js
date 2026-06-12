"use client";

import termsLanguage from "@/app/lib/lang/termsLanguage.json";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./terms.css";

export default function TermsPage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang);

    const handleStorageChange = () => {
      const updatedLang = localStorage.getItem("lang");
      if (updatedLang) setLang(updatedLang);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const t = termsLanguage[lang] || termsLanguage["en"];

  return (
    <>
      <Header />

      <div className="flex flex-col min-h-screen bg-white mt-7">
        <main className="max-w-3xl mx-auto px-6 py-10 flex-grow text-gray-900 mt-7">
          <h1 className="text-3xl font-bold text-gray-900 mb-10">
            {t.title}
          </h1>

          {/* Service Description */}
          <section className="mb-10 border-l-4 border-gray-200 pl-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.serviceDescription.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {t.serviceDescription.content}
            </p>
          </section>

          {/* User Accounts */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.userAccounts.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {t.userAccounts.content}
            </p>
          </section>

          {/* Booking Rules */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.bookingRules.title}
            </h2>

            <p className="text-gray-800 mb-3 leading-relaxed">
              {t.bookingRules.content}
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              {t.bookingRules.cancellationTerms.map((term, idx) => (
                <li key={idx}>{term}</li>
              ))}
            </ul>

            <p className="text-gray-700 italic">
              {t.bookingRules.rescheduleNote}
            </p>
          </section>


          {/* Technician Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.technicianPolicy.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {t.technicianPolicy.content}
            </p>
          </section>

          {/* Liability */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.liability.title}
            </h2>

            <p className="text-gray-800 mb-3 leading-relaxed">
              {t.liability.content}
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              {t.liability.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="text-gray-700 leading-relaxed">
              {t.liability.exception}
            </p>
          </section>

          {/* Prohibited Behavior */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.prohibitedBehavior.title}
            </h2>

            <p className="text-gray-800 mb-3 leading-relaxed">
              {t.prohibitedBehavior.content}
            </p>

            <ul className="list-disc pl-6 space-y-1 text-gray-800 mb-3">
              {t.prohibitedBehavior.behaviors.map((behavior, idx) => (
                <li key={idx}>{behavior}</li>
              ))}
            </ul>

            <p className="text-gray-700">
              {t.prohibitedBehavior.consequence}
            </p>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.termination.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {t.termination.content}
            </p>
          </section>

          {/* Changes */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.changesToTerms.title}
            </h2>
            <p className="text-gray-800 leading-relaxed">
              {t.changesToTerms.content}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-10 border-l-4 border-gray-200 pl-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {t.contact.title}
            </h2>

            <p className="text-gray-800 mb-3 leading-relaxed">
              {t.contact.content}
            </p>

            <a
              href={`mailto:${t.contact.email}`}
              className="text-blue-700 font-medium hover:text-blue-800 hover:underline"
            >
              {t.contact.email}
            </a>

            <p className="text-sm text-gray-600 mt-2">
              {t.contact.responseTime}
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            {t.lastUpdated}
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
}