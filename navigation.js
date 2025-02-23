"use client";

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
    pathnames: {
      '/': '/',
      '/about': '/about',
      '/courses': '/courses',
      '/courses/[id]': '/courses/[id]',
      '/contact': '/contact'
    }
  });
