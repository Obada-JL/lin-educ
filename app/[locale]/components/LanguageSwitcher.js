"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SyrianFlag from "../../../images/sy-flag.png";
import USFlag from "../../../images/us-flag.png";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
// import "../../../public/styles/main_styles.css"

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const switchLanguage = (newLocale) => {
    // Simple direct path replacement
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setIsDropdownOpen(false);
  };

  return (
    // <div 
    //   className={`language-dropdown ${locale === "ar" ? "me-auto" : "ms-auto"}`}
    //   style={{ alignSelf: "center" }}
    //   ref={dropdownRef}
    // >
    //   <button
    //     className="dropdown-toggle"
    //     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    //     aria-expanded={isDropdownOpen}
    //     style={{
    //       appearance: "none", // Remove default browser styling
    //       background: "none", // Remove default background
    //       border: "none", // Remove default border
    //       padding: 0, // Adjust padding as needed
    //       cursor: "pointer", // Ensure it looks clickable
    //     }}
    //   >
    //     <div className="flag-wrapper">
    //       <Image
    //         src={locale === "ar" ? SyrianFlag : USFlag}
    //         alt={locale === "ar" ? "العربية" : "English"}
    //         width={35}
    //         height={24}
    //         className="flag-icon"
    //       />
    //     </div>
    //     <span className="lang-text">
    //       {locale === "ar" ? "العربية" : "English"}
    //     </span>
    //     <svg
    //       className={`arrow-icon ${isDropdownOpen ? "open" : ""}`}
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 24 24"
    //     >
    //       <path d="M7 10l5 5 5-5z" />
    //     </svg>
    //   </button>

    //   {isDropdownOpen && (
    //     <div className="dropdown-menu">
    //       <button
    //         className={`dropdown-item ${locale === "ar" ? "active" : ""}`}
    //         onClick={() => switchLanguage("ar")}
    //       >
    //         <div className="flag-wrapper">
    //           <Image
    //             src={SyrianFlag}
    //             alt="العربية"
    //             width={30}
    //             height={24}
    //             className="flag-icon"
    //           />
    //         </div>
    //         <span className="lang-text">العربية</span>
    //       </button>
    //       <button
    //         className={`dropdown-item ${locale === "en" ? "active" : ""}`}
    //         onClick={() => switchLanguage("en")}
    //       >
    //         <div className="flag-wrapper">
    //           <Image
    //             src={USFlag}
    //             alt="English"
    //             width={24}
    //             height={24}
    //             className="flag-icon"
    //           />
    //         </div>
    //         <span className="lang-text">English</span>
    //       </button>
    //     </div>
    //   )}

    //   <style jsx>{`
    //     .language-dropdown {
    //       position: relative;
    //       display: inline-block;
    //     }
        
    //     .dropdown-toggle {
    //       display: flex;
    //       align-items: center;
    //       background: none;
    //       border: none;
    //       cursor: pointer;
    //       padding: 8px 12px;
    //       border-radius: 4px;
    //       transition: background-color 0.3s;
    //     }
        
    //     .dropdown-toggle:hover {
    //       background-color: rgba(0, 0, 0, 0.05);
    //     }
        
    //     .flag-wrapper {
    //       margin-right: 8px;
    //     }
        
    //     .lang-text {
    //       margin: 0 8px;
    //       font-size: 14px;
    //     }
        
    //     .arrow-icon {
    //       width: 16px;
    //       height: 16px;
    //       fill: currentColor;
    //       transition: transform 0.3s;
    //     }
        
    //     .arrow-icon.open {
    //       transform: rotate(180deg);
    //     }
        
    //     .dropdown-menu {
    //       position: absolute;
    //       top: 100%;
    //       right: 0;
    //       z-index: 1000;
    //       min-width: 160px;
    //       padding: 8px 0;
    //       margin: 8px 0 0;
    //       background-color: #fff;
    //       border-radius: 4px;
    //       box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    //     }
        
    //     .dropdown-item {
    //       display: flex;
    //       align-items: center;
    //       width: 100%;
    //       padding: 8px 16px;
    //       border: none;
    //       background: none;
    //       text-align: left;
    //       cursor: pointer;
    //       transition: background-color 0.3s;
    //     }
        
    //     .dropdown-item:hover {
    //       background-color: rgba(0, 0, 0, 0.05);
    //     }
        
    //     .dropdown-item.active {
    //       background-color: rgba(0, 0, 0, 0.08);
    //       font-weight: 500;
    //     }
        
    //     [dir="rtl"] .flag-wrapper {
    //       margin-right: 0;
    //       margin-left: 8px;
    //     }
        
    //     [dir="rtl"] .dropdown-menu {
    //       right: auto;
    //       left: 0;
    //     }
    //   `}</style>
    // </div>
    <div
  className={`language-dropdown ${locale === "ar" ? "me-auto" : "ms-auto"} border-[#5965d4]`}
  style={{ alignSelf: "center" }}
  ref={dropdownRef}
>
  <button
    className="dropdown-toggle"
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    aria-expanded={isDropdownOpen}
    style={{
      appearance: "none", // Remove default browser styling
      background: "none", // Remove default background
      border: "none", // Remove default border
      padding: 0, // Adjust padding as needed
      cursor: "pointer", // Ensure it looks clickable
    }}
  >
    <div className="flag-wrapper">
      <Image
        src={locale === "ar" ? SyrianFlag : USFlag}
        alt={locale === "ar" ? "العربية" : "English"}
        width={35}
        height={24}
        className="flag-icon"
      />
    </div>
    <span className="lang-text">
      {locale === "ar" ? "العربية" : "English"}
    </span>
    <svg
      className={`arrow-icon ${isDropdownOpen ? "open" : ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={{
        marginLeft: "8px", // Adjust spacing as needed
      }}
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  </button>

  {isDropdownOpen && (
    <div className="dropdown-menu">
      <button
        className={`dropdown-item ${locale === "ar" ? "active" : ""}`}
        onClick={() => switchLanguage("ar")}
      >
        <div className="flag-wrapper">
          <Image
            src={SyrianFlag}
            alt="العربية"
            width={30}
            height={24}
            className="flag-icon"
          />
        </div>
        <span className="lang-text">العربية</span>
      </button>
      <button
        className={`dropdown-item ${locale === "en" ? "active" : ""}`}
        onClick={() => switchLanguage("en")}
      >
        <div className="flag-wrapper">
          <Image
            src={USFlag}
            alt="English"
            width={24}
            height={24}
            className="flag-icon"
          />
        </div>
        <span className="lang-text">English</span>
      </button>
    </div>
  )}
</div>
  );
} 