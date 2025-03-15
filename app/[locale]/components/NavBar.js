"use client";

import Image from "next/image";
import Logo from "../../../images/homelogo.png";
import { useLocale } from "next-intl";
import { Link } from "../../../navigation";
import { useState, useEffect, useRef } from "react";
import "../../../styles/main_styles.css";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar() {
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  // Use hardcoded strings instead of translations
  const navLinks = [
    { path: "/", label: locale === "ar" ? "الرئيسية" : "Home" },
    { path: "/about", label: locale === "ar" ? "من نحن" : "About" },
    { path: "/products", label: locale === "ar" ? "المنتجات" : "Products" },
    { path: "/courses", label: locale === "ar" ? "الدورات" : "Courses" },
    { path: "/contact", label: locale === "ar" ? "اتصل بنا" : "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      // Only close if clicking outside both the menu and toggle button
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) && 
        toggleRef.current && 
        !toggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Handle escape key press
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`} 
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="header-container d-flex flex-row align-items-center justify-content-between">
        <div className="logo_container">
          <Link href="/">
            <div className="logo">
              <Image
                src={Logo}
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </div>
          </Link>
        </div>

        <nav className="main_nav d-none d-md-block">
          <ul className="d-flex flex-row gap-4 me-4 align-items-center">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="d-flex align-items-center">
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Mobile menu toggle */}
          <button 
            ref={toggleRef}
            className={`menu-toggle d-md-none ms-3 ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
        <div className="mobile-menu-container">
          <ul>
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link href={path} onClick={() => setIsMenuOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: white;
          padding: 15px 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .header-container {
          width: 100%;
        }

        .header.scrolled {
          padding: 10px 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        /* Improved hamburger menu */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          position: relative;
          width: 40px;
          height: 40px;
          z-index: 1001;
          outline: none;
        }

        .hamburger-box {
          width: 30px;
          height: 24px;
          display: inline-block;
          position: relative;
        }

        .hamburger-inner {
          display: block;
          top: 50%;
          margin-top: -2px;
        }

        .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
          width: 30px;
          height: 3px;
          background-color: #333;
          border-radius: 4px;
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        .hamburger-inner::before, .hamburger-inner::after {
          content: "";
          display: block;
        }

        .hamburger-inner::before {
          top: -10px;
        }

        .hamburger-inner::after {
          bottom: -10px;
        }

        /* Animation for the hamburger menu */
        .menu-toggle.active .hamburger-inner {
          transform: rotate(45deg);
        }

        .menu-toggle.active .hamburger-inner::before {
          top: 0;
          opacity: 0;
        }

        .menu-toggle.active .hamburger-inner::after {
          bottom: 0;
          transform: rotate(-90deg);
        }

        /* Mobile menu styling */
        .mobile-menu {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(255, 255, 255, 0.98);
          overflow: hidden;
          transition: all 0.4s ease-in-out;
          opacity: 0;
          visibility: hidden;
          z-index: 1000;
        }

        .mobile-menu.open {
          height: 100vh;
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-container {
          padding: 100px 30px 30px;
          height: 100%;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .mobile-menu li {
          margin: 15px 0;
          text-align: center;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.3s ease;
          transition-delay: 0.1s;
        }

        .mobile-menu.open li {
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-menu.open li:nth-child(1) { transition-delay: 0.1s; }
        .mobile-menu.open li:nth-child(2) { transition-delay: 0.2s; }
        .mobile-menu.open li:nth-child(3) { transition-delay: 0.3s; }
        .mobile-menu.open li:nth-child(4) { transition-delay: 0.4s; }
        .mobile-menu.open li:nth-child(5) { transition-delay: 0.5s; }

        .mobile-menu a {
          color: #333;
          text-decoration: none;
          font-size: 24px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
          padding: 10px 20px;
          position: relative;
        }

        .mobile-menu a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          bottom: 0;
          left: 50%;
          background-color: #5965d4;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .mobile-menu a:hover {
          color: #5965d4;
        }

        .mobile-menu a:hover::after {
          width: 70%;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: inline-block;
          }
          
          .header {
            padding: 10px 20px;
          }
          
          .header.scrolled {
            padding: 8px 20px;
          }
          
          .logo img {
            width: 80px;
            height: 80px;
          }
        }

        @media (max-width: 576px) {
          .logo img {
            width: 70px;
            height: 70px;
          }
          
          .mobile-menu a {
            font-size: 20px;
            padding: 8px 16px;
          }
          
          .mobile-menu li {
            margin: 10px 0;
          }
          
          .mobile-menu-container {
            padding: 80px 20px 20px;
          }
        }

        /* RTL support for mobile menu */
        [dir="rtl"] .mobile-menu a::after {
          left: auto;
          right: 50%;
          transform: translateX(50%);
        }
      `}</style>
    </header>
  );
}
