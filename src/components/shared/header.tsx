'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Toaster } from 'react-hot-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="sticky top-0 mb-6 flex items-center justify-between border-b border-b-input bg-white py-4">
        <h4 className="font-semibold italic text-slate-800 md:text-xl xl:text-3xl">
          Templater
        </h4>
        <div className="flex items-center">
          <Link href="/">
            <Button
              variant="link"
              className={cn(
                'text-slate-600',
                pathname === '/' && 'text-slate-950',
              )}
            >
              Templates List
            </Button>
          </Link>
          <Link href="/create-template">
            <Button
              variant="link"
              className={cn(
                'text-slate-600',
                pathname === '/create-template' && 'text-slate-950',
              )}
            >
              Create New Template
            </Button>
          </Link>
        </div>
      </header>
      <Toaster />
    </>
  );
};

export default Header;
