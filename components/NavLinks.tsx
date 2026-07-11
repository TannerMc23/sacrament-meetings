'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/meetings', label: 'All Meetings' },
  { href: '/meetings/current', label: 'Current Meeting' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 px-6 py-3 bg-slate-700 text-white">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? 'font-semibold underline underline-offset-4'
                : 'text-slate-200 hover:text-white'
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}