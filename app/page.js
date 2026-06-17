"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./lib/styles/home.css";
import { routers } from "@/app/routers/index";
import homeLanguage from "@/app/lib/lang/homeLanguage.json";
import { information } from "@/app/services/infomation.service";

export default function Home() {
  const [info, setInfo] = useState(null);
  const [lang, setLang] = useState("en");

  // Đọc ngôn ngữ từ localStorage
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) setLang(storedLang);

    const handleStorageChange = () => {
      const updatedLang = localStorage.getItem("lang");
      if (updatedLang) setLang(updatedLang);
    };
    window.addEventListener("storage", handleStorageChange);

    const fetchInformation = async () => {
      try {
        const res = await information();
        setInfo(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInformation();

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Handler mở App Store
  const handleAppStore = () => {
    window.open("https://apps.apple.com/vn/app/zen-home-spa/id6761649798", "_blank");
  };

  // Handler tải APK
  const handleApkDownload = () => {
    const link = document.createElement("a");
    link.href = "/ZehHomeSpa-v1.1.46-release.apk";
    link.download = "ZehHomeSpa-v1.1.46-release.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Lấy dữ liệu ngôn ngữ từ JSON
  const t = homeLanguage[lang] || homeLanguage["en"];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {t.title}
                </h1>
                
                <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl">
                  {t.description}
                </p>

                {/* App Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                  <button 
                    onClick={handleAppStore}
                    className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[200px]"
                  >
                    <i className="fa-brands fa-apple text-2xl"></i>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </button>
                  
                  <button 
                    onClick={handleApkDownload}
                    className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[200px]"
                  >
                    <i className="fa-brands fa-google-play text-xl"></i>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-lg font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>

                {/* Feature Stats bị comment giữ nguyên */}
              </div>

              {/* Right Content - App Mockup (giữ nguyên) */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-[600px] bg-gradient-to-b from-purple-100 to-pink-100 rounded-[3rem] border-[14px] border-gray-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-2xl"></div>
                    <div className="pt-12 px-6 h-full flex flex-col items-center justify-center">
                      <Image
                        src="/images/logos/spa_logo.png"
                        alt="Zen Home Spa App"
                        width={120}
                        height={120}
                        className="rounded-2xl mb-6 shadow-md"
                      />
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Zen Home Spa</h3>
                      <p className="text-gray-600 text-center mb-8">{t.appSlogan || "Your wellness journey starts here"}</p>
                      <div className="space-y-3 w-full">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                              <i className="fa-solid fa-calendar text-purple-600"></i>
                            </div>
                            <span className="text-gray-700">{t.features.booking}</span>
                          </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                              <i className="fa-solid fa-spa text-pink-600"></i>
                            </div>
                            <span className="text-gray-700">{t.features.relax}</span>
                          </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <i className="fa-solid fa-gift text-blue-600"></i>
                            </div>
                            <span className="text-gray-700">{t.features.offers}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (giữ nguyên) */}
        <section className="py-20 px-4 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t.featuresTitle || "Why Choose Zen Home Spa?"}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t.featuresSubtitle || "Experience the ultimate in wellness and relaxation with our premium features"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-spa text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.features.relax}</h3>
                <p className="text-gray-600 leading-relaxed">{t.features.relaxDescription}</p>
              </div>
              <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-calendar-check text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.features.booking}</h3>
                <p className="text-gray-600 leading-relaxed">{t.features.bookingDescription}</p>
              </div>
              <div className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className="fa-solid fa-gift text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.features.offers}</h3>
                <p className="text-gray-600 leading-relaxed">{t.features.offersDescription}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              {t.ctaTitle || "Ready to Transform Your Wellness Journey?"}
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {t.ctaDescription || "Download the Zen Home Spa app today and experience premium wellness at your fingertips."}
            </p>
            {/* App Download Buttons trong CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={handleAppStore}
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[200px] font-semibold"
              >
                <i className="fa-brands fa-apple text-2xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="text-lg">App Store</div>
                </div>
              </button>
              
              <button 
                onClick={handleApkDownload}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 min-w-[200px] font-semibold"
              >
                <i className="fa-brands fa-google-play text-xl"></i>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href={routers.privacy}
                className="px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition backdrop-blur-sm"
              >
                <i className="fa-solid fa-shield-heart mr-2"></i>
                {t.buttons.privacy}
              </Link>
              <Link
                href="/terms"
                className="px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition backdrop-blur-sm"
              >
                <i className="fa-solid fa-file-contract mr-2"></i>
                {t.buttons.terms}
              </Link>
              <Link
                href="/support"
                className="px-6 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition backdrop-blur-sm"
              >
                <i className="fa-solid fa-headset mr-2"></i>
                {t.buttons.support}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer info={info} />
    </>
  );
}