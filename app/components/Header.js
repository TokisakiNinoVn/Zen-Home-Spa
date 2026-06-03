"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState("vi");

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

  // Text hiển thị theo ngôn ngữ
  const t = {
    vi: {
      privacy: "Chính sách bảo mật",
      support: "Hỗ trợ khách hàng",
      terms: "Điều khoản dịch vụ",
      contact: "Liên hệ",
    },
    en: {
      privacy: "Privacy Policy",
      support: "Support",
      terms: "Terms of Service",
      contact: "Contact",
    },
  }[lang || "vi"];

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logos/spa_logo.png"
          alt="Zen Home Spa Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="font-semibold text-gray-800 text-lg">Zen Home Spa</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link
          href="/privacy"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fa-solid fa-shield-halved text-blue-500"></i>
          {t.privacy}
        </Link>

        <Link
          href="/support"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fa-solid fa-headset text-blue-500"></i>
          {t.support}
        </Link>

        <Link
          href="/terms"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fa-solid fa-file-contract text-blue-500"></i>
          {t.terms}
        </Link>

        <Link
          href="/contact"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <i className="fa-solid fa-phone text-blue-500"></i>
          {t.contact}
        </Link>

        <LanguageSwitcher />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col p-4">
            <Link
              href="/privacy"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-shield-halved text-blue-500"></i>
              {t.privacy}
            </Link>

            <Link
              href="/support"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-headset text-blue-500"></i>
              {t.support}
            </Link>

            <Link
              href="/terms"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-file-contract text-blue-500"></i>
              {t.contact}
            </Link>
            <Link
              href="/terms"
              className="flex items-center gap-2 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-phone text-blue-500"></i>
              {t.contact}
            </Link>

            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
