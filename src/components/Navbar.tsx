'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What we do' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-black'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4 gap-2 lg:gap-0 items-center'>
        <Link href='/' className='text-[#7fff00] text-[32px] font-bold tracking-[1px]' style={{fontFamily: "'Russo synchro 400', sans-serif"}}>
          synchronicity.one
        </Link>
        <nav className='flex gap-4 sm:gap-6'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[16px] lg:text-[18px] px-3 lg:px-4 py-1 border rounded transition-colors ${
                pathname === link.href
                  ? 'border-[#7fff00] bg-[#7fff00] text-black'
                  : 'border-transparent text-[#7fff00] hover:border-[#7fff00] hover:bg-[#7fff00] hover:text-black'
              }`}
              style={{fontFamily: "'Russo synchro 400', sans-serif"}}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
