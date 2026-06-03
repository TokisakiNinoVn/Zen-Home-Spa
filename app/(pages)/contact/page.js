"use client";

import contactLanguage from "@/app/lib/lang/contactLanguage.json";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./contact.css";

export default function ContactPage() {
  const [lang, setLang] = useState("en");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Đọc ngôn ngữ từ localStorage
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

  const t = contactLanguage[lang] || contactLanguage["en"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Giả lập gửi form (thay bằng API call thực tế)
    try {
      // Giả sử gửi thành công sau 1 giây
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // console.log("Form data:", formData);
      setStatus({ type: "success", message: t.contactForm.success });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: t.contactForm.error });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-white mt-7">
        <main className="max-w-4xl mx-auto px-6 py-10 flex-grow text-gray-900 mt-7">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            {t.title}
          </h1>

          {/* Intro Section */}
          <section className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              {t.intro.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{t.intro.content}</p>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column: Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm h-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t.contactInfo.title}
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <i className="fa-regular fa-envelope text-purple-600 text-xl mt-1"></i>
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <a
                        href={`mailto:${t.contactInfo.email}`}
                        className="text-purple-700 hover:underline break-all"
                      >
                        {t.contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-regular fa-phone text-purple-600 text-xl mt-1"></i>
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <a href={`tel:${t.contactInfo.phone}`} className="text-purple-700 hover:underline">
                        {t.contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <i className="fa-regular fa-location-dot text-purple-600 text-xl mt-1"></i>
                    <div>
                      <p className="font-medium text-gray-700">Address</p>
                      <p className="text-gray-600">{t.contactInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <i className="fa-regular fa-map"></i> {t.mapPlaceholder}
                  </p>
                  <div className="mt-3 bg-gray-200 h-32 rounded-xl flex items-center justify-center text-gray-400">
                    <i className="fa-regular fa-map-location-dot text-3xl"></i>
                    <span className="ml-2">Google Map</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Contact Form */}
            <div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t.contactForm.title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      {t.contactForm.nameLabel}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition"
                      placeholder={t.contactForm.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      {t.contactForm.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition"
                      placeholder={t.contactForm.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      {t.contactForm.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent outline-none transition"
                      placeholder={t.contactForm.messagePlaceholder}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t.contactForm.sending : t.contactForm.submitButton}
                  </button>
                  {status.message && (
                    <div
                      className={`mt-3 text-center p-2 rounded-lg ${
                        status.type === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-12">
            {t.lastUpdated}
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}