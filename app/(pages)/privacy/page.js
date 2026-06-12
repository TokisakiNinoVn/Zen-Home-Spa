"use client";

import privacyLanguage from '@/app/lib/lang/privacyLanguage.json';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./privacy.css";

export default function PrivacyPage() {
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

  const t = privacyLanguage[lang] || privacyLanguage["en"];


  return (
  <>
    <Header />

    <main className="max-w-3xl mx-auto px-6 py-10 main-privacy-content text-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        {t.title}
      </h1>

      {/* Intro */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.intro.title}
        </h2>
        <p className="text-gray-800 leading-relaxed">
          {t.intro.content}
        </p>
      </section>

      {/* Data Collection */}
      <section className="mb-10 border-l-4 border-gray-200 pl-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t.dataCollection.title}
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {t.dataCollection.userData.title}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              {t.dataCollection.userData.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {t.dataCollection.deviceData.title}
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-800">
              {t.dataCollection.deviceData.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data Usage */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.dataUsage.title}
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          {t.dataUsage.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Data Sharing */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.dataSharing.title}
        </h2>
        <p className="text-gray-800 mb-3 leading-relaxed">
          {t.dataSharing.content}
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>{t.dataSharing.sharedWithTechnicians}</li>
          <li>{t.dataSharing.notSold}</li>
          <li>{t.dataSharing.thirdPartySharing}</li>
        </ul>
      </section>

      {/* Data Storage & Security */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.dataStorage.title}
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          {t.dataStorage.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* User Rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.userRights.title}
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          {t.userRights.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <p className="text-gray-800 mt-3 leading-relaxed">
          {t.userRights.howToExercise.replace("{email}", t.contact.email)}
        </p>
      </section>

      {/* Location Usage */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.locationUsage.title}
        </h2>
        <p className="text-gray-800 leading-relaxed">
          {t.locationUsage.content}
        </p>
      </section>

      {/* Children Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.childrenPolicy.title}
        </h2>
        <p className="text-gray-800 leading-relaxed">
          {t.childrenPolicy.content}
        </p>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          {t.contact.title}
        </h2>
        <p className="text-gray-800 mb-2 leading-relaxed">
          {t.contact.content}
        </p>

        <a
          href={`mailto:${t.contact.email}`}
          className="text-blue-700 hover:text-blue-800 hover:underline font-medium"
        >
          {t.contact.email}
        </a>
      </section>

      <p className="text-sm text-gray-500 mt-12">
        {t.lastUpdated}
      </p>
    </main>

    <Footer />
  </>
);
}