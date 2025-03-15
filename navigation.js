"use client";

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    // Remove explicit pathnames to allow default handling
    localePrefix: "always",
  });
