import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './index';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
