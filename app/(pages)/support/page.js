// "use client";

// import supportLanguage from '@/app/lib/lang/supportLanguage.json';
// import { useEffect, useState } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import "./support.css";

// export default function SupportPage() {
//   const [lang, setLang] = useState("en");

//   useEffect(() => {
//     const storedLang = localStorage.getItem("lang");
//     if (storedLang) setLang(storedLang);

//     // Lắng nghe thay đổi từ localStorage (hoặc sự kiện từ LanguageSwitcher)
//     const handleStorageChange = () => {
//       const updatedLang = localStorage.getItem("lang");
//       if (updatedLang) setLang(updatedLang);
//     };
//     window.addEventListener("storage", handleStorageChange);

//     // cleanup
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   // Lấy dữ liệu ngôn ngữ từ JSON
//   const t = supportLanguage[lang] || supportLanguage["en"];

//   return (
//     <>
//       <Header />
//       <div className="flex flex-col min-h-screen main-support-content">
//         <main className="max-w-3xl mx-auto p-6 flex-grow">
//           <h1 className="text-3xl font-bold mb-6 text-black">{t.title}</h1>
//           <p className="text-gray-700 leading-relaxed mb-6">{t.description}</p>
//           <section className="text-gray-700 leading-relaxed">
//             <h2 className="text-2xl font-semibold mb-3">{t.sections.contactUs.title}</h2>
//             <p className="mb-4">{t.sections.contactUs.content}</p>
//             <a
//               href={`mailto:${t.sections.contactUs.email}`}
//               className="text-blue-600 hover:underline font-medium"
//             >
//               {t.sections.contactUs.email}
//             </a>

//             <h2 className="text-2xl font-semibold mt-8 mb-3">{t.sections.faq.title}</h2>
//             <p className="mb-4">{t.sections.faq.content}</p>
//             <ul className="list-disc pl-6 mb-4">
//               <li className="mb-2">
//                 <strong>{t.sections.faq.items.booking.title}</strong>: {t.sections.faq.items.booking.content}
//               </li>
//               <li className="mb-2">
//                 <strong>{t.sections.faq.items.account.title}</strong>: {t.sections.faq.items.account.content}
//               </li>
//               <li className="mb-2">
//                 <strong>{t.sections.faq.items.payment.title}</strong>: {t.sections.faq.items.payment.content}
//               </li>
//             </ul>

//             <h2 className="text-2xl font-semibold mt-8 mb-3">{t.sections.liveSupport.title}</h2>
//             <p className="mb-4">{t.sections.liveSupport.content}</p>
//           </section>
//         </main>
//         {/* <Footer /> */}
//         </div>
//       <Footer />
//     </>
//   );
// }

"use client";

import supportLanguage from '@/app/lib/lang/supportLanguage.json';
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./support.css";

export default function SupportPage() {
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

    const t = supportLanguage[lang] || supportLanguage["en"];

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen main-support-content">
        <main className="max-w-3xl mx-auto p-6 flex-grow">
          {/* Header section */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-black mb-2">{t.header.title}</h1>
            <p className="text-gray-600 text-lg">{t.header.subtitle}</p>
          </div>

          {/* Contact Methods */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.contactMethods.title}</h2>
            <div className="space-y-3 bg-gray-50 p-5 rounded-xl">
              <div>
                <a href={`mailto:${t.contactMethods.email.address}`} className="text-blue-600 hover:underline font-medium">
                  {t.contactMethods.email.label}: {t.contactMethods.email.address}
                </a>
              </div>
              <div>
                <a href={`tel:${t.contactMethods.hotline.number}`} className="text-blue-600 hover:underline font-medium">
                  {t.contactMethods.hotline.label}: {t.contactMethods.hotline.number}
                </a>
              </div>
              <div>
                {/* <span className="font-medium">{t.contactMethods.chat.label}</span>
                <span className="text-gray-600 ml-2">({t.contactMethods.chat.description})</span> */}
              </div>
              <div className="text-gray-700">{t.contactMethods.hours}</div>
            </div>
          </section>

          {/* Quick Help / FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.quickHelp.title}</h2>
            <div className="space-y-4">
              {t.quickHelp.items.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-3">
                  <h3 className="font-bold text-gray-900">{item.question}</h3>
                  <p className="text-gray-700 mt-1">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Booking Issues */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t.bookingIssues.title}</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r">
              <ul className="list-disc pl-5 space-y-2 text-gray-800">
                {t.bookingIssues.items.map((issue, idx) => (
                  <li key={idx}>{issue}</li>
                ))}
              </ul>
              <p className="mt-3 text-gray-700 text-sm italic">{t.bookingIssues.note}</p>
            </div>
          </section>

          {/* Emergency Note */}
          <div className="my-8 bg-yellow-50 border border-yellow-300 text-yellow-800 p-4 rounded-lg text-center font-medium">
            ⚠️ {t.emergencyNote}
          </div>

          {/* Legal Links */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex justify-center space-x-6 text-sm text-blue-600">
            <a href={t.links.privacyPolicy.url} className="hover:underline">{t.links.privacyPolicy.text}</a>
            <a href={t.links.termsOfService.url} className="hover:underline">{t.links.termsOfService.text}</a>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}